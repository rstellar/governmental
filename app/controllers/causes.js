/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Cause = mongoose.model('Cause'),
    _ = require('underscore'),
    path = require('path');;



/**
 * Find cause by id
 */
exports.cause = function(res, req, next, id){
  Cause.load(id, function(){
    if (err) return next(err);
    if (!cause) return next(new Error('Failed to load cause '+id));
    req.cause = cause;
    next();
  });
};

 /**
 * Create a cause
 */
exports.create = function(req, res){
    var cause = new Cause(req.body);
    cause.user = req.user;

    cause.save(function(err){
      if (err) {
        return res.send('causes/create',{
          errors: err.errors,
          cause: cause
        });
      } else {
        res.jsonp(cause);
      }
    })
};

 /**
 * Update a cause
 */
exports.update = function(req,res){
    var cause = req.cause;

    cause = _.extend(cause, req.body);

    cause.save(function(err){
        res.jsonp(cause);
    });

};

/**
 * Delete a cause
 */

exports.delete = function(req,res){
};
 /**
 * Show a cause
 */
exports.show = function(req,res){
    res.jsonp(req.article);
};

 /**
 * List of causes
 */

exports.all = function(req, res){

    Cause.find().sort('-created').populate('user','name username').exec(function(err, causes) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(causes);
        } 
    });
};
