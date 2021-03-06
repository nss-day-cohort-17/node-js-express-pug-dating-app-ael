'use strict'

const passport = require('passport')


module.exports.destroy = (req, res) => {
    //passport adds logout method automatically
    req.logout()
    res.redirect('/login')
}

module.exports.show = (req, res) => {
	const currentUser = req.user
	res.render('logout-confirm', {currentUser})
}
