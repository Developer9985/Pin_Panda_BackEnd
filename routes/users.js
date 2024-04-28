const { name } = require('ejs');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/pinPanda");
const plm = require('passport-local-mongoose');

const userSchema = mongoose.Schema({

        username: String,
        pname:String,
        email: String,
        password: String,
        profileImage:String,
        contact:Number,
        boards:{
          type:Array,
          default: []
        },
        posts:[{

          type:mongoose.Schema.Types.ObjectId,
          ref: 'post'
        }]
        
});

userSchema.plugin(plm);

const User = mongoose.model('User', userSchema);

module.exports = User;