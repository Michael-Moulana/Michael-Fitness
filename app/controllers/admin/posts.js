const postModel = require('@models/post')
const userModel = require('@models/user')

const dateService = require('@services/dateService')
const langService = require('@services/langService')

const postValidator = require('@validators/post')


// displaying the posts
exports.index = async (req, res) => {

    // getting all posts
    const posts = await postModel.findAll()
    
    // new obj to render with new fields such as persian date 
    const presentedPosts = posts.map(post => {

        // new field for displaying creation date with persian numbers and persian calendar using two services 
        post.created_at_persian = langService.toPersianNumbers(dateService.toPersianDate(post.created_at))

        // new field for displaying views with persian numbers
        post.persian_views = langService.toPersianNumbers(post.views)

        return post
    })
    res.render('admin/posts/index', {
        layout: 'admin',
        posts: presentedPosts
    })
}


// rendering users to create route to displaying them
exports.create = async (req, res) => {
    const users = await userModel.findAll(['id', 'full_name'])
    res.render('admin/posts/create', { layout: 'admin', users })
}

// getting post's data from the body and storing them to db
exports.store = async (req, res) => {
    const postData = {
        title: req.body.title,
        author_id: req.body.author,
        slug: req.body.slug,
        content: req.body.content,
        status: req.body.status
    }
    // errors is an array of strings(error messages)
    const errors = postValidator.create(postData)
    if (errors.length > 0) {
        const users = await userModel.findAll(['id', 'full_name'])
        res.render('admin/posts/create', { layout: 'admin', users, errors, hasError: errors.length > 0 })
    } else {
        const insertId = await postModel.create(postData)
        res.redirect('/admin/posts')
    }

    // const insertId = await postModel.create(postData)
    // if (insertId) {
    //     res.redirect('/admin/posts')
    // }
}

// deletes post by id
exports.remove = async (req, res) => {
    const postID = req.params.postID
    if (parseInt(postID) !== 0) {
        const result = await postModel.delete(postID)
    }
    res.redirect('/admin/posts')
}

// edits post by id
exports.edit = async (req, res) => {
    const postID = req.params.postID
    if (parseInt(postID) === 0) {
        res.redirect('/admin/posts')
    }
    const post = await postModel.find(postID)
    const users = await userModel.findAll(['id', 'full_name'])
    res.render('admin/posts/edit', { layout: 'admin', users, post })
}

exports.update = async (req, res) => {
    const postID = req.params.postID
    if (parseInt(postID) === 0) {
        res.redirect('/admin/posts')
    }

    const postData = {
        title: req.body.title,
        author_id: req.body.author,
        slug: req.body.slug,
        content: req.body.content,
        status: req.body.status
    }
    const result = await postModel.update(postID, postData)
    return res.redirect('/admin/posts')
}