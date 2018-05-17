
const mongoose = require('mongoose');
const Post = mongoose.model('post');

module.exports = (app) => {
    app.get('/api/posts', (req, res) => {
        Post.find({}, function(err, posts) {
            res.json( {posts: posts});
         });
    });

    app.post('/api/posts', async (req, res) => {
        const { email, text } = req.body;
        
        console.log("email" + req.body);
        const post = new Post({
          email: email,
          text: text,
          dateAdded: Date.now(),
        });

        try {
            await post.save();
            res.send(post);
          } catch (err) {
            res.status(422).send(err);
          }
    });
}