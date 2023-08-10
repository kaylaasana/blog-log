// no many-to-many relationships, all one-to-many
const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');

// User
    // on delete cascade
    // have many Comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
    // have many Blog
User.hasMany(Blog, {
    foreignKey: 'user_id' ,
    onDelete: 'CASCADE'
});

// Blog
    // on delete cascade
    // has many Comment
Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
})
    // has one User
Blog.hasMany(User, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE'
})
    // have foreign key for User Model   

// Comment
    // belongs to one User
Comment.belongsTo(User, {
    foreignKey: 'comment_id',
})
    // Comment belongs to one Blog
Comment.belongsTo(Blog, {
    foreignKey: 'comment_id',
})
    // have foreign key for Blog Model
    // have foreign key for User Model

