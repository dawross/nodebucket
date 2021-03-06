/*
============================================
; Title: item.js
; Author: Dan Ross
; Date: 20 March 2021
; Modified By: Dan Ross
; Description: This is our item schema.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create new Item schema with one field.
let itemSchema = new Schema({
  text: { type: String },
});

//Export so it's accessible to other files in the application.
module.exports = itemSchema;
