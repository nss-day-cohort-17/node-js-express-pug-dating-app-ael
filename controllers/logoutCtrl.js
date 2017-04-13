'use strict'

const passport = require('passport')


module.exports.destroy = (req, res) => {
    //passport adds logout method automatically
    req.logout()
    res.redirect('/login')
}
