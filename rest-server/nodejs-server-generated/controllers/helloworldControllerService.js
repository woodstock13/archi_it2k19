'use strict'

module.exports.helloWorld = function helloWorld(req, res, next) {
  res.send({
    message: 'This is the mockup controller for helloWorld'
  });
};