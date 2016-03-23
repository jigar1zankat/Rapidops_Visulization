'use strict';

var express = require('express');
var controller = require('./controllers/users.controller.js');
var router = express.Router();



//router.get('/people', controller.getPeopleByName);
//router.get('/organization', controller.getOrganizationByName);
//router.get('/people_city', controller.getPeopleByLocation);
//router.get('/organization_city', controller.getOrganizationByLocation);
router.get('/ppl/:id', controller.getPersonDetails);
router.get('/org/:id', controller.getOrganizationDetails);
//router.get('/people_title',controller.getPeopleByTitle);
router.post('/all',controller.getPeopleByAll);
router.post('/allorg',controller.getOrganizationByAll);

module.exports = router;
