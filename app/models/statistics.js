const db = require('@database/mysql')

exports.totalUsers = async () => {
    const [result] = await db.query('SELECT COUNT(id) as totalUsers FROM users')
    // result[0] will return on object and by writing '.totalUsers' we will return the value
    return result[0].totalUsers
}

exports.totalComments = async () => {
    const [result] = await db.query('SELECT COUNT(id) as totalComments FROM comments')
    // result[0] will return on object and by writing '.totalUsers' we will return the value
    return result[0].totalComments
}

exports.totalPosts = async () => {
    const [result] = await db.query('SELECT COUNT(id) as totalPosts FROM posts')
    // result[0] will return on object and by writing '.totalUsers' we will return the value
    return result[0].totalPosts
}

exports.totalViews = async () => {
    const [result] = await db.query('SELECT SUM(views) as totalViews FROM posts')
    // result[0] will return on object and by writing '.totalUsers' we will return the value
    return result[0].totalViews
}