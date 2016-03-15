'use strict';

var express = require('express');
var controller = require('./controllers/users.controller.js');
var router = express.Router();



router.get('/people', controller.getPeopleByName);
router.get('/organization', controller.getOrganizationByName);
router.get('/people_city', controller.getPeopleByLocation);
router.get('/organization_city', controller.getOrganizationByLocation);

module.exports = router;
