const { createDbConnection } = require('./db')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())

const { booksRouter } = require('./routes/books.route')
const { storeRouter } = require('./routes/stores.route')
const { employeesRouter } = require('./routes/employees.route')
const { inventoryRouter } = require('./routes/inventory.route')

createDbConnection()

app.use('/api/books', booksRouter)
app.use('/api/store', storeRouter)
app.use('/api/employees', employeesRouter)
app.use('/api/inventory', inventoryRouter)


app.listen(PORT, () => {
    console.log('Starting server at port ' + PORT)
})
