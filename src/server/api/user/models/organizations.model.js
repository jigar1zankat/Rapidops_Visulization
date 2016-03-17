var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
/**
 * Creating user schema.
 * @type {*|Schema}
 */
var UserSchema = new Schema({
    "crunchbase_uuid" :String,
    "type" :String ,
    "primary_role" : String,
    "name" :String,
    "crunchbase_url" : String,
    "homepage_url" :String ,
    "profile_image_url" : String,
    "facebook_url" :String ,
    "twitter_url" : String,
    "linkedin_url" :String ,
    "stock_symbol" : String,
    "location_city" :String ,
    "location_region" :String ,
    "location_country_code" :String ,
    "short_description" :String,
    "funding_round_name":String
});
/**
 * Encrypting the user password.
 */
UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, null, null, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

UserSchema.methods.comparePassword = function (password) {
    var user = this;
    return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('organizations', UserSchema);
