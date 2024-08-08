const express = require('express');
const cors = require('cors');
const connection = require('../src/db/connection.js');


const app = express();
app.use(cors());

async function initalizeApp() {
    try {
        await connection();
        console.log('Connected...')
    } catch (error) {
        console.log('Got an error');
    }
}



