const { createDbConnection } = require('./db')

const db = createDbConnection()

async function insertStore(location) {
    const sql = `INSERT INTO stores(location) VALUES (?)`
    db.run(sql, [location], (err) => {
        if (err) return console.error(err.message)
    })
}

async function insertEmployee(store_ID, name) {
    const sql = `INSERT INTO employees(store_ID, name) VALUES (?, ?)`
    db.run(sql, [store_ID, name], (err) => {
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
    const sql = `INSERT INTO inventory(store_ID, book_ID, quantity) VALUES (?, ?, ?)`
    db.run(sql, [store_ID, book_ID, quantity], (err) => {
        if (err) return console.error(err.message)
    })
} 

function query(table, attr, value) {
    let sql = `SELECT * FROM ${table.toString()}`
    const arr = []
    
    if (attr && value) {
        sql += ` WHERE ${attr.toString()} = ?`
        arr.push(value)
    }
    return new Promise((resolve, reject) => {
        db.all(sql, arr, (error, rows) => {
            if (error) {
                reject(error.message)
            } else {
                resolve(rows)
            }
        })
    })
    
}

async function queryInventory(store_ID, book_ID) {
    let sql = `SELECT * FROM inventory`
    const arr = []

    if (store_ID && book_ID) {
        sql +=  ` WHERE store_ID = ? AND book_ID = ?`
        arr.push(store_ID)
        arr.push(book_ID)
    } else if (!book_ID && store_ID) {
        sql += ` WHERE store_ID = ?`
        arr.push(store_ID)
    } else if (!store_ID && book_ID) {
        sql += ` WHERE book_ID = ?`
        arr.push(book_ID)
    }
    return new Promise((resolve, reject) => {
        db.all(sql, arr, (err, rows) => {
            if (err) {
                reject(err.message)
            } else {
                resolve(rows)
            }
        })
    })
}

async function update(table, attr, value, id) {
    let sql = `UPDATE ${table.toString()} SET ${attr.toString()} = ? WHERE ID = ?`
    const arr = [value, id]
    
    db.run(sql, arr, (error) => {
        if (error) {
            throw new Error('Update failed: ' + error.message)
        } 
    })
}

async function updateInventory(store_ID, book_ID, quantity) {
    let sql = `UPDATE inventory SET quantity = ? WHERE store_ID = ? AND book_ID = ?`
    const arr = [quantity, store_ID, book_ID]
    
    db.run(sql, arr, (error) => {
        if (error) {
            throw new Error('Update failed: ' + error.message)
        } 
    })
}

async function remove(table, id) {
    let sql = `DELETE FROM ${table.toString()} WHERE ID = ?`
    const arr = [id]
    
    db.run(sql, arr, (error) => {
        if (error) {
            throw new Error('Remove failed: ' + error.message)
        }
    }) 
}

async function removeInventory(store_ID, book_ID) {
    let sql = `DELETE FROM inventory WHERE store_ID = ? AND book_ID = ?`
    const arr = [store_ID, book_ID]
    
    db.run(sql, arr, (error) => {
        if (error) {
            throw new Error('Remove failed: ' + error.message)
        }
    }) 
}

module.exports = { insertStore, insertBook, insertEmployee, insertInventory, queryInventory, query, update, remove, updateInventory, removeInventory }
