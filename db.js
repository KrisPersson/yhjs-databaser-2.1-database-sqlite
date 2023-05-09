const sqlite3 = require('sqlite3').verbose()

const path = './database.db'

function createDbConnection() {
	const db = new sqlite3.Database(path, (error) => {
		if (error) return console.log(error.message)
		createTables(db)
	})
}

function createTables(db) {
    let tables = [ 
        `
        CREATE TABLE IF NOT EXISTS stores (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            location varchar(100) NOT NULL
        )
        `,
        `
        CREATE TABLE IF NOT EXISTS employees (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            store_ID INTEGER NOT NULL,
            name varchar(100) NOT NULL
        )
        `,
        `
        CREATE TABLE IF NOT EXISTS books (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            title varchar(100) NOT NULL,
            author varchar(100) NOT NULL,
            price INTEGER NOT NULL
        )
        `,
        `
        CREATE TABLE IF NOT EXISTS inventory (
            store_ID INTEGER NOT NULL,
            book_ID INTEGER NOT NULL,
            quantity INTEGER NOT NULL
        )
        `
    ]

    tables.forEach(table => db.exec(table))
}



module.exports =  { db: createDbConnection() }
