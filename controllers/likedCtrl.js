'use strict'

const {knex} = require('../db/database.js');
const User = () => knex('users');
// const Like = ()=> knex('likes');
const currentUserId = 1;

const getLikedUsers = () => User().join('likes', 'likes.liked_user_id', '=', 'users.id' ).where({'likes.user_id': currentUserId}).select().then((rows) => rows).catch((error)=> {throw error});

module.exports.show = (req, res, err) =>{
  getLikedUsers()
  .then((users) => {
    console.log('users', users);
  res.render('liked', {page: 'Liked', users})
  })
  .catch(err)
}
