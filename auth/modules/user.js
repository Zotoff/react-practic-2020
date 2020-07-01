const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT = 10;

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: 1,
        required: true,
        trim: true
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    },
    token: {
        type: String,
        required: true
    }
});

/*Middleware function for User*/
userSchema.pre('save', function(next){
    var user = this;

    // Checking if the user modified the password
    if(user.isModified('password')) {
        bcrypt.genSalt(SALT, function(err, salt){
            if(err) return next(err); // continue to work
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })
        });
    } else {
        next();
    } 
});

// Compare the passwords

userSchema.methods.comparePassword = function(candidatePassword, cb){
    var user = this;
    bcrypt.compare(candidatePassword, user.password, (err, isMatch)=>{
        if(err) return cb(err);
        cb(null, isMatch);
    });
};

// Generate the token
userSchema.methods.generateToken = function(cb){
    var user = this;
    let token = jwt.sign(user._id.toHexString(), 'supersecret');

    user.token = token;
    user.save(function(err, user){
        if(err) return cb(err);
        cb(null, user);
    })
};

// Create the own method find by token
userSchema.statics.findByToken = function(token, cb){
    var user = this;
    jwt.verify(token, 'supersecret', (err, decode)=>{
        user.findOne({'_id': decode, 'token': token}, (err, user)=>{
            if(err) return cb(err);
            cb(null, user);
        })
    })
}

userSchema.methods.deleteToken = function(token, cb){
    var user = this;
    user.update({$unset: {token: 1}}, (err, user)=>{
        if(err) return cb(err);
        cb(null, user)
    })
}

const User = mongoose.model('User', userSchema);

module.exports = {User};