const Skill = require('../models/skill')


  module.exports = {
    index
  };



// function show


function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }