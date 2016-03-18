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
    People.count({$or: [ { "location_city":  people_city  }, { "location_region":  people_city  } ,{"location_country_code":people_city}]},function(err,counter){
        if(err){
            console.log("error in counter of peoplelocation")
        }
        else{
                getDatas(counter);
        }});


    function getDatas(counter){ People.find({$or: [ { "location_city": new RegExp('^'+people_city+'$', "i")}, { "location_region":  new RegExp('^'+people_city+'$', "i")} ,{"location_country_code":new RegExp('^'+people_city+'$', "i")}]},function(err, user) {
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
                'data':user,
                'count':counter
            });
        }
    }).skip((page)*100).limit(100)}

};

exports.getPeopleByName = function(req, res) {
  var people_name=req.query.name,
      page=req.query.page;

    console.log("calling people by name",people_name);
    People.count({$or: [ { "first_name":  people_name  }, { "last_name":  people_name }]},function(err,counter){
        if(err){
            console.log("error in counter of peoplelocation")
        }
        else{
            getDatas(counter);
        }});


    function getDatas(counter){
        People.find({$or: [ { "first_name":  new RegExp('^'+people_name+'$', "i")  }, { "last_name":  new RegExp('^'+people_name+'$', "i")}]},function(err, user) {
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
                    'data':user,
                    'count':counter
                });
            }
        }).skip((page)*100).limit(100);
    }

};


exports.getOrganizationByLocation = function(req, res) {
    var organization_city=req.query.city,
    page=req.query.page;

    console.log("calling organization by location",organization_city);
    Organization.count({$or: [ { "location_city":  organization_city  }, { "location_region":  organization_city  } ,{"location_country_code":organization_city}]},function(err,counter){
        if(err){
            console.log("error in counter of peoplelocation")
        }
        else{
            getDatas(counter);
        }});


    function getDatas(counter){Organization.find({$or: [ { "location_city":  new RegExp('^'+organization_city+'$', "i")  }, { "location_region":  new RegExp('^'+organization_city+'$', "i")  } ,{"location_country_code":new RegExp('^'+organization_city+'$', "i")}]},function(err, user) {
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
                'data':user,
                'count':counter
            });
        }
    }).skip((page)*100).limit(100);}

};

exports.getOrganizationByName = function(req, res) {
    var organization_name=req.query.name,
        page=req.query.page;

    console.log("calling organization by name",organization_name);
    Organization.count({ "name": organization_name  },function(err,counter){
        if(err){
            console.log("error in counter of peoplelocation")
        }
        else{
            console.log("success in counter of peoplelocation",counter);
            getDatas(counter);
        }});


function getDatas(counter){ Organization.find( { "name": new RegExp('^'+organization_name+'$', "i")  },function(err, user) {
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
            'data':user,
            'count':counter
        });
    }
}).skip((page)*100).limit(100);}

};

exports.getOrgById = function(req, res) {
    var orgId = req.params.id;

    Organization.findById(orgId, function(err, org) {
        if (err) return res.status(500).send(err);
        if (!org) {
            res.status(401).json({
                'status': 'failure',
                'message':"Org doesn't exist"
            });
        }
        else {
            res.status(200).json({
                'status': 'success',
                'data':org
            });
        }
    });
};

exports.getPplById = function(req, res) {
    var pplId = req.params.id;
    
    People.findById(pplId, function(err, ppl) {
        if (err) return res.status(500).send(err);
        if (!ppl) {
            res.status(401).json({
                'status': 'failure',
                'message':"People doesn't exist"
            });
        }
        else {
            res.status(200).json({
                'status': 'success',
                'data':ppl
            });
        }
    });
};


