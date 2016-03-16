'use strict';

var People = require('../models/people.model.js');
var Organization = require('../models/organizations.model.js');

/**
 * Get list of users
 */
exports.getPeopleByLocation = function(req, res) {
  var people_city=req.query.city,
    page=req.query.page;

console.log("calling people by location",people_city);

  People.find({$or: [ { "location_city":  people_city  }, { "location_region":  people_city  } ,{"location_country_code":people_city}]},function(err, user) {
    if (err) return res.status(500).send(err);
    if (!user) {
      res.status(401).json({
        'status': 'failure',
        'message':"User doesn't exist"
      });
    }
    else {

        console.log("in people by location success",user);
      res.status(200).json({
        'status': 'success',
        'data':user
      });
    }
  })
};

exports.getPeopleByName = function(req, res) {
  var people_name=req.query.name,
      page=req.query.page;

    console.log("calling people by name",people_name);

    People.find({$or: [ { "first_name":  people_name  }, { "last_name":  people_name }]},function(err, user) {
    if (err) return res.status(500).send(err);
    if (!user) {
      res.status(401).json({
        'status': 'failure',
        'message':"User doesn't exist"
      });
    }
    else {
        console.log("in people by name success",user);
      res.status(200).json({
        'status': 'success',
        'data':user
      });
    }
  });
};


exports.getOrganizationByLocation = function(req, res) {
    var organization_city=req.query.city,
    page=req.query.page;

    console.log("calling organization by location",organization_city);
    Organization.find({$or: [ { "location_city":  organization_city  }, { "location_region":  organization_city  } ,{"location_country_code":organization_city}]},function(err, user) {
        if (err) return res.status(500).send(err);
        if (!user) {
            console.log("in if error");
            res.status(401).json({
                'status': 'failure',
                'message':"User doesn't exist"
            });
        }
        else {
            console.log("in organization by location successssss",user);
            res.status(200).json({
                'status': 'success',
                'data':user
            });
        }
    });
};

exports.getOrganizationByName = function(req, res) {
    var organization_name=req.query.name,
        page=req.query.page;

    console.log("calling organization by name",organization_name);
    Organization.find( { "name":  organization_name  },function(err, user) {
        if (err) return res.status(500).send(err);
        if (!user) {
            res.status(401).json({
                'status': 'failure',
                'message':"User doesn't exist"
            });
        }
        else {
            console.log("in organization by name successssss",user);
            res.status(200).json({
                'status': 'success',
                'data':user
            });
        }
    });
};


