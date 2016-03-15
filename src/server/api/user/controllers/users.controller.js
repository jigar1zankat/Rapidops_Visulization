'use strict';

var People = require('../models/people.model.js');
var Organization = require('../models/organizations.model.js');

/**
 * Get list of users
 */
exports.getPeopleByLocation = function(req, res) {
  var people_city=req.query.city,
    page=req.query.page;
    if(page<=1){page=0}else{page=(page-1)*100}
console.log("calling",people_city);

  People.find({$or: [ { "location_city":  people_city  }, { "location_region":  people_city  } ,{"location_country_code":people_city}]},function(err, user) {
    if (err) return res.status(500).send(err);
    if (!user) {
      res.status(401).json({
        'status': 'failure',
        'message':"User doesn't exist"
      });
    }
    else {
      res.status(200).json({
        'status': 'success',
        'data':user
      });
    }
  }).skip(page).limit(100);
};

exports.getPeopleByName = function(req, res) {
  var people_name=req.query.name,
      page=req.query.page;
    if(page<=1){page=0}else{page=(page-1)*100}
People.find({$or: [ { "first_name":  people_name  }, { "last_name":  people_name }]},function(err, user) {
    if (err) return res.status(500).send(err);
    if (!user) {
      res.status(401).json({
        'status': 'failure',
        'message':"User doesn't exist"
      });
    }
    else {
      res.status(200).json({
        'status': 'success',
        'data':user
      });
    }
  }).skip(page).limit(100);
};



exports.getOrganizationByLocation = function(req, res) {
    var organization_city=req.query.city,
    page=req.query.page;
    if(page<=1){page=0}else{page=(page-1)*100}
    console.log("calling org",organization_city);
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
            console.log("in else successssss",user);
            res.status(200).json({
                'status': 'success',
                'data':user
            });
        }
    }).skip(page).limit(100);
};

exports.getOrganizationByName = function(req, res) {
    var organization_name=req.query.name,
        page=req.query.page;
    if(page<=1){page=0}else{page=(page-1)*100}
    console.log("calling org",organization_name);
    Organization.find( { "name":  organization_name  },function(err, user) {
        if (err) return res.status(500).send(err);
        if (!user) {
            res.status(401).json({
                'status': 'failure',
                'message':"User doesn't exist"
            });
        }
        else {
            console.log("in else successssss",user);
            res.status(200).json({
                'status': 'success',
                'data':user
            });
        }
    }).skip(page).limit(100);
};


