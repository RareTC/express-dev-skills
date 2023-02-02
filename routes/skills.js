var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);
//get todos/new
router.get('/new', skillsCtrl.new);
//get skills:id
router.get('/:id', skillsCtrl.show);

router.get('/:id/edit', skillsCtrl.edit);

router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);

router.put('/:id', skillsCtrl.update);


module.exports = router;
