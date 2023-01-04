const db = require('@database/mysql')

exports.findAll = async (columns = []) => {
    // if we pass (id,full_name) to the function as an argument,
    // the value of sqlColumns will be [id,full_name], else it will be [*]
    // which means all records
    const sqlColumns = columns.length > 0 ? columns.join(',') : '*' 
    const [rows, fields] = await db.query(`
        SELECT ${sqlColumns}
        FROM users
    `)
    return rows
}