var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var dbstring = require('../config/db');


router.get('/header', (req,res) => {
    mongoClient.connect(dbstring.uri, { useNewUrlParser: true }, (err, client) => {
        if(err) {
            console.log(err);
            return;
        };
        var headerCollection = client.db('myDBTest').collection('blogCollection');
        headerCollection.find({}).toArray((err, docs) => {
            if (err) {
                console.log(err);
                return;
            }
            var { items } = docs[0];
            res.send({items: items});
        });
        client.close();
    });
});

module.exports = router