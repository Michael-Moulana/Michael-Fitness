const db = require('@database/mysql')

// retrieve a post by id
exports.find = async (postID) => {
    // LIMIT 1 just for ensuring that it returns only 1 row ( prevents sql injection )
    const [rows,fields] = await db.query(`
        SELECT p.*,u.full_name
        FROM posts p
        JOIN users u ON p.author_id=u.id
        WHERE p.id=? LIMIT 1
    `, [postID])
    return rows.length > 0 ? rows[0] : false
}

// retrieving all posts from db
exports.findAll = async () => {
    // select all columns from table posts and its alias name will be p
    // select all columns from table users and its alias name will be s
    // Join
    const [rows,fields] = await db.query(`
        SELECT p.*,u.full_name
        FROM posts p
        JOIN users u ON p.author_id=u.id
        ORDER BY p.created_at DESC
    `)
    return rows
}

// inserting a new post to the db
exports.create = async (postData) => {
    const [result] = await db.query(`INSERT INTO posts SET ?`, [postData])
    return result.insertId
}

// deleting a post from db, by its ID
exports.delete = async (postID) => {
    const [result] = await db.query(`DELETE FROM posts WHERE id=?  LIMIT 1`, [postID])
    return result.affectedRows > 0
}

// updating a post from db, by its ID
exports.update = async (postID, updateFields) => {
    const [result] = await db.query(`UPDATE posts SET ? WHERE id=? LIMIT 1`, [updateFields, postID])
    return result.affectedRows > 0
}