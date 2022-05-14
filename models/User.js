const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '【暱稱】必填'],
        },
        sex: {
            type: String,
            enum: ['male', 'female'],
            required: [true, '【性別】必填'],
        },
        email: {
            type: String,
            required: [true, '【帳號】必填'],
        },
        password: {
            type: String,
            required: [true, '【密碼】必填'],
        },
        avatar: {
            type: String,
            default: 'https://i.imgur.com/m8khK3h.png'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false,
    }
);

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
