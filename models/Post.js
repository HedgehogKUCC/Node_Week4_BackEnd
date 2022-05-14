const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'user',
        },
        content: {
            type: String,
            required: [true, '【貼文內容】必填'],
        },
        image: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false,
    }
);

const PostModel = mongoose.model('post', postSchema);

module.exports = PostModel;
