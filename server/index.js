const express = require('express');

const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(express.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log("Database Connected :)");
});

app.post('/api/cartoon', (req , res) => {
    const { name, main, side, channel } = req.body;
    const db = req.app.get('db');
    db.addCharacter(name, channel, main, side).then(() => {
        res.sendStatus(200);
    })
})






app.listen(process.env.SERVER_PORT, () =>
console.log(`App is listening on port ${process.env.SERVER_PORT}`))


