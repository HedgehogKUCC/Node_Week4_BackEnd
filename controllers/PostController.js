const PostModel = require('../models/Post');
const { success, error } = require('../service/responseHandle');

module.exports = {
    async insertPost(req, res) {
        try {
            const data = req.body;
            const {
                userID,
                content,
            } = data;

            if ( !userID ) {
                error(res, '請登入帳號');
                return;
            }

            if ( !content ) {
                error(res, '【貼文內容】必填');
                return;
            }

            const result = await PostModel.create(data);
            success(res, result);
        } catch(err) {
            error(res, err.message);
        }
    },
}
