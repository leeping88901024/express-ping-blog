var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://test:test@cluster0-shard-00-00-avsto.azure.mongodb.net:27017,cluster0-shard-00-01-avsto.azure.mongodb.net:27017,cluster0-shard-00-02-avsto.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    if (err) {
        console.log(err)
        return
    }
    const myNewCollection = client.db('myDBTest').collection('blogCollection');
    // headers
    /* myNewCollection.insertOne({
        items: [
          {
            sys: {
              id: 'asdasdad',
            },
            fields: {
              purpose: 'Home',
              headerImage: 'https://i.imgur.com/ebCJ61b.jpg',
              createdDate: `${new Date()}`,
              title: 'Hello, World!',
              titleVisible: true,
              subTitle: "Calpa's Blog Starter",
              subTitleVisible: true,
            },
          },
          {
            sys: {
              id: 'sdfsdfxzxczxc',
            },
            fields: {
              purpose: 'GuestBook',
              headerImage: 'https://i.imgur.com/ebCJ61b.jpg',
              createdDate: '2018-07-21T12:00+08:00',
              title: 'GuestBook',
              titleVisible: true,
              subTitle: 'write your subtitle here',
              subTitleVisible: true,
            },
          },
          {
            sys: {
              id: 'qwejkasdasd',
            },
            fields: {
              purpose: 'Tags',
              headerImage: 'https://i.imgur.com/ebCJ61b.jpg',
              createdDate: '2018-07-21T12:00+08:00',
              title: 'Tags',
              titleVisible: true,
              subTitle: 'write your subtitle here',
              subTitleVisible: true,
            },
          },
        ],
        contentType: 'headers'
      }).then( result => console.log(result.insertedId )); */
      myNewCollection.insertOne({
        items: [
            {
            sys: {
                id: 'czxkcjzxc',
                createdAt: '2017-09-21T06:01:35.114Z',
                updatedAt: '2017-09-21T06:01:35.114Z',
                contentType: {
                sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'blogPost',
                },
                },
                locale: 'zh-Hant',
            },
            fields: {
                title: 'Blog Title',
                tags: 'JavaScript',
                url: 'your-awesome-blog-post-url',
                createdDate: `${new Date()}`,
                jueJinLikeIconLink: '',
                jueJinPostLink: '',
                content: '## 前言\n\nContent\n\n## abcd\n\ncontent1123123',
                headerImgur: 'https://i.imgur.com/gf1pKau.png',
                headerBackgroundColor: 'a2c9ea',
            },
            },
        ],
        contentType: 'blogPost'
      }).then( result => console.log(result.insertedId ));
    client.close();
});
