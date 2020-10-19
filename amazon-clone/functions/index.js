const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_51HdzymBcbpsq5RsfwLLnmnUOJlNdEkRrAFSvo7I6GLBS8bZFfygmfaXFpHK7bsmNk8FwjgbcjgSVTQAlqwc1uk6l00eKvAnL3J')

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('hello')
})

app.post('/payments/create', async (req, res) => {
    const total = req.query.total
    console.log('Payment req', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app)