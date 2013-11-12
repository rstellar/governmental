/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Cause Schema
 */
var CauseSchema = new Schema({
  created:{
    type: Date,
    default: Date.now
  },
  title:{
    type: String,
    default: '',
    trim: true
  },
  stakeholders:{
    type: String,
    default: '',
    trim: true
  },
  action:{
    type: String,
    default:'',
    trim: true
  }
});


//Validations


//Statics
