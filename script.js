const express = require('express');
const app = express();
app.use(express.json());

// Sample Product Data
const products = [
    { id: 1, name: "Oud Royal", price: 120 },
    { id: 2, name: "Midnight Musk", price: 95 }
];

// API Route for Products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Order Logic
app.post('/api/order', (req, res) => {
    const { cart, customerEmail, phone } = req.body;
    console.log(`Order received for ${customerEmail}. Phone: ${phone}`);
    // Yahan aap email alert bhej sakte hain
    res.status(200).send({ message: "Order Placed Successfully!" });
});

app.listen(3000, () => console.log('Server running on port 3000'));
