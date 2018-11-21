var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://test:test@cluster0-shard-00-00-avsto.azure.mongodb.net:27017,cluster0-shard-00-01-avsto.azure.mongodb.net:27017,cluster0-shard-00-02-avsto.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    if (err) {
        console.log(err)
        return
    }
    const myNewCollection = client.db('myDBTest').collection('blogCollection');
    const cursor = myNewCollection.find({}).toArray((err, docs) => {
        console.log(JSON.stringify(docs));
    })
    client.close();
});
