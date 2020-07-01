const {User} = require('../modules/user');

let authenticate = (req, res, next) => {
    let token = req.cookies.auth;

    User.findByToken(token, (err, user)=>{
        if(err) return res.status(400).json({
            message: 'Bad token'
        })
        if(!user) return res.status(400).send('User is not in db');

        // Putting the user and token into request
        req.user = user;
        req.token = token;
        next();
    })
}

module.exports = {authenticate}