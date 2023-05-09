const { db } = require('./db')

async function insertStore(location) {
    const sql = `INSERT INTO stores(location) VALUES (?)`
    await db.run(sql, [location], (err) => {
        if (err) return console.error(err.message)
    })
}

async function insertEmployee(store_ID, name) {
    const sql = `INSERT INTO employees(store_ID, name) VALUES (?, ?)`
    await db.run(sql, [store_ID, name], (err) => {
        if (err) return console.error(err.message)
    })
}

async function insertBook(title, author, price) {
    const sql = `INSERT INTO books(title, author, price) VALUES (?, ?, ?)`
    db.run(sql, [title, author, price], (err) => {
        if (err) return console.error(err.message)
    })
}

async function insertInventory(store_ID, book_ID, quantity) {
    const sql = `INSERT INTO inventory(store_ID, name) VALUES (?, ?, ?)`
    await db.run(sql, [store_ID, book_ID, quantity], (err) => {
        if (err) return console.error(err.message)
    })
} 

async function query(table, attr, value) {
    let sql = `SELECT * FROM ?`
    const arr = [table]
    if (attr && value) {
        sql += ` WHERE ? = ?`
        arr.push(attr)
        arr.push(value)
    }
    await db.all(sql, arr, (err, rows) => {
        if (err) return console.error(err.message)
        return rows
    })
}

async function queryInventory(store_ID, book_ID) {
    let sql = `SELECT * FROM inventory WHERE store_ID = ? AND book_ID = ? `
    const arr = [store_ID, book_ID]
    await db.all(sql, arr, (err, rows) => {
        if (err) return console.error(err.message)
        return rows
    })
}

async function update(table, attr, value, id) {
    let sql = `UPDATE ? SET ? = ? WHERE ID = ?`
    const arr = [table, attr, value, id]
    
    await db.run(sql, arr, (err,) => {
        if (err) return console.error(err.message)
        return 
    })
}

async function remove() {
    let sql = `DELETE FROM ? WHERE ID = ?`
    const arr = [table, id]
    
    await db.run(sql, arr, (err,) => {
        if (err) return console.error(err.message)
        return 
    }) 
}

module.exports = { insertStore, insertBook, insertEmployee, insertInventory, query, update, remove }
