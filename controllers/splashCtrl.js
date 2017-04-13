'use strict'

module.exports.show = (req, res) =>{
  res.render('splash', {noNav: true});
}
