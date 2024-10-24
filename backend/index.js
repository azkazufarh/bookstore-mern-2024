const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const cors = require('cors')

require('dotenv').config()

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

// routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require('./src/orders/order.route');
const authRoutes = require('./src/users/user.route');

app.use('/api/books', bookRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes)


async function main() {
    await mongoose.connect(process.env.DB_URL);

    app.get('/', (req, res) => {
        res.send('Book World!')
    })
}

main().then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`)
})