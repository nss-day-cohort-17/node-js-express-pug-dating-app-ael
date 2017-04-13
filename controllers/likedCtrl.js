'use strict'

const {knex} = require('../db/database.js');
//const  {Like}  = require('../models/likesMd.js')
const { Like: {findLikedUsers} } = require('../models/likesMd.js')

// const Like = ()=> knex('likes');


// const getLikedUsers = () => User().join('likes', 'likes.liked_user_id', '=', 'users.id' ).where({'likes.user_id': currentUserId}).select().then((rows) => rows).catch((error)=> {throw error});

module.exports.show = (req, res, err) =>{
  let CURRENT_USER_ID = req.user.id;
  findLikedUsers(CURRENT_USER_ID)
  .then((users) => {
    res.render('liked', {page: 'Liked', users})
  })
  .catch(err)
}
