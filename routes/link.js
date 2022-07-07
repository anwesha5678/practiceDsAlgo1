'use strict';
let express = require('express');
let router = express.Router();

var linkListController = require('../api/linkedList/new_link');
var linkListControllerObj = new linkListController();

router.post('/linklist', (req, res) => { linkListControllerObj.insertBegining(req,res) });
router.post('/linklist-after', (req, res) => { linkListControllerObj.insertAfter(req,res) });


module.exports = router;