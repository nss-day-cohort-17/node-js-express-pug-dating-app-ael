'use strict'

const {knex} = require('../db/database.js');
//const  {Like}  = require('../models/likesMd.js')
const { Like: {findLikedUsers} } = require('../models/likesMd.js')

// const Like = ()=> knex('likes');
const currentUserId = 1;

// const getLikedUsers = () => User().join('likes', 'likes.liked_user_id', '=', 'users.id' ).where({'likes.user_id': currentUserId}).select().then((rows) => rows).catch((error)=> {throw error});

module.exports.show = (req, res, err) =>{
  findLikedUsers(1)
  .then((users) => {
    res.render('liked', {page: 'Liked', users})
  })
  .catch(err)
}
