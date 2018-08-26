let mongoose = require('mongoose');
let crypto = require('crypto');
let jwt = require('jsonwebtoken');

let UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName : String,
  passwordHash : String,
  salt: String
});

UserSchema.method("setPassword", function(password){
  console.log("setPassword Was Hit")
  this.salt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto.pbkdf2Sync(password.toString(), this.salt, 1000, 64, "sha1")
});

UserSchema.method("validatePassword", function(password){
  console.log("validatePassword Was Hit")
  //let hash = crypto.pbkdf2Sync(password.toString(), this.salt, 1000, 64, "sha1")
  let hash = crypto.pbkdf2Sync(password.toString(), this.salt, 1000, 64, "sha1")
  console.log(this.passwordhash)
  console.log(hash)
  return (hash === this.passwordHash);
});

UserSchema.method("generateJWT", function(){
  return jwt.sign({
    id:this._id,
    userName: this.userName,
  }, 'SecretKey');
});

let User = mongoose.model('User', UserSchema);
module.exports = User;