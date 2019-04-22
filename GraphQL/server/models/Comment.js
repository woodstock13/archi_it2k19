var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var User = mongoose.model('User');
var Article = mongoose.model('Article');

var CommentSchema = new mongoose.Schema({
    body: String, 
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    article: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artcile' }]
})

CommentSchema.plugin(uniqueValidator, {message: 'is already taken'});

//ajouter des fonctions --> ici

CommentSchema.methods.toJSONFor = function(article,user){
    return {
      body: this.body,
      article: this.Article.toProfileJSONFor(article),
      author: this.author.toProfileJSONFor(user)
    };
  };
  
  export default mongoose.model('Comment', CommentSchema);