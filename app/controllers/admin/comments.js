const commentModel = require('@models/comment')

const userService = require('@services/userService')
const dateService = require('@services/dateService')
const langService = require('@services/langService')

exports.index = async (req, res) => {
    const comments = await commentModel.findAll()
    const presentedComments = comments.map(comment => {
        // adding new fields to the comments ( 'userAvatar' )
        comment.userAvatar = userService.gravatar(comment.user_email)
        comment.created_at_persian = langService.toPersianNumbers(dateService.toPersianDate(comment.created_at))
        return comment
    })
    res.render('admin/comments/index', { layout: 'admin', comments: presentedComments })
}