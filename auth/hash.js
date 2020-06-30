const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');

/*Illustration of hash*/

// let password = 'password123';

// bcrypt.genSalt(10, function(err, salt){
//     bcrypt.hash(password, salt, function(err, hash){
//         console.log(hash);
//     })
// });

/*Illustration of tokens*/
// const user = {
//     id: 12,
//     token: MD5('password').toString()
// }
// console.log(user);

let id = '100';
const secret = 'supersecretpassword';

const token = jwt.sign(id, secret);
const decodedToken = jwt.verify(token, secret);
console.log(decodedToken);