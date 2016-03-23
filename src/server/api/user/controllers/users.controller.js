'use strict';

var People = require('../models/people.model.js');
var Organization = require('../models/organizations.model.js');
//var perPage = 100;
//var page = Math.max(0, req.param('page'));


/**
 * Get list of users
 */
//exports.getPeopleByLocation = function(req, res) {
//  var people_city=req.query.city,
//    page=req.query.page;
//
//console.log("calling people by location",people_city);
//
//    People.count({$or:[ { "location_city":  new RegExp('^'+people_city+'$', "i")  }, { "location_region":  new RegExp('^'+people_city+'$', "i")  } ,{"location_country_code":new RegExp('^'+people_city+'$', "i")}] },function(err,counter){
//        if(err){
//            console.log("error in counter of peoplelocation")
//        }
//        else{
//            getDatas(counter);
//        }});
//
//    function getDatas(counter){ People.find({$or: [ { "location_city":  new RegExp('^'+people_city+'$', "i")  }, { "location_region":  new RegExp('^'+people_city+'$', "i")  } ,{"location_country_code":new RegExp('^'+people_city+'$', "i")}]},function(err, user) {
//        if (err) return res.status(500).send(err);
//        if (!user) {
//            res.status(401).json({
//                'status': 'failure',
//                'message':"User doesn't exist"
//            });
//        }
//        else {
//
//            console.log("in people by location success",user);
//            res.status(200).json({
//                'status': 'success',
//                'data':user,
//                'count':counter
//            });
//        }
//    }).skip((page)*100).limit(100)}
//
//
//};
//
//exports.getPeopleByName = function(req, res) {
//  var people_name=req.query.name,
//      page=req.query.page;
//
//    console.log("calling people by name",people_name);
//
//    People.count({$or: [ { "first_name": new RegExp('^'+people_name+'$', "i")   }, { "last_name":  new RegExp('^'+people_name+'$', "i") }] },function(err,counter){
//        if(err){
//            console.log("error in counter of peoplelocation")
//        }
//        else{
//            getDatas(counter);
//        }});
//
//    function getDatas(counter){
//        People.find({$or: [ { "first_name": new RegExp('^'+people_name+'$', "i")   }, { "last_name":  new RegExp('^'+people_name+'$', "i") }]},function(err, user) {
//            if (err) return res.status(500).send(err);
//            if (!user) {
//                res.status(401).json({
//                    'status': 'failure',
//                    'message':"User doesn't exist"
//                });
//            }
//            else {
//                console.log("in people by name success",user);
//                res.status(200).json({
//                    'status': 'success',
//                    'data':user,
//                    'count':counter
//                });
//            }
//        }).skip((page)*100).limit(100);
//    }
//
//
//};
//
//
//
//exports.getPeopleByTitle = function(req, res) {
//    var people_title=req.query.title,
//        page=req.query.page;
//    People.count({ "title":  new RegExp('^'+people_title+'$', "i") },function(err,counter){
//        if(err){
//            console.log("error in counter of peoplelocation")
//        }
//        else{
//            getDatas(counter);
//        }});
//
//
//    function getDatas(counter){
//        People.find({ "title":  new RegExp('^'+people_title+'$', "i") },function(err, user) {
//            if (err) return res.status(500).send(err);
//            if (!user) {
//                res.status(401).json({
//                    'status': 'failure',
//                    'message':"User doesn't exist"
//                });
//            }
//            else {
//                console.log("in people by title success",user);
//                res.status(200).json({
//                    'status': 'success',
//                    'data':user,
//                    'count':counter
//                });
//            }
//        }).skip((page)*100).limit(100);
//    }
//
//};
//
//exports.getOrganizationByLocation = function(req, res) {
//    var organization_city=req.query.city,
//    page=req.query.page;
//
//    console.log("calling organization by location",organization_city);
//    Organization.count({$or: [ { "location_city":  new RegExp('^'+organization_city+'$', "i")   }, { "location_region":  new RegExp('^'+organization_city+'$', "i")  } ,{"location_country_code":new RegExp('^'+organization_city+'$', "i")}] },function(err,counter){
//        if(err){
//            console.log("error in counter of peoplelocation")
//        }
//        else{
//            getDatas(counter);
//        }});
//
//    function getDatas(counter){Organization.find({$or: [ { "location_city":  new RegExp('^'+organization_city+'$', "i")   }, { "location_region":  new RegExp('^'+organization_city+'$', "i")  } ,{"location_country_code":new RegExp('^'+organization_city+'$', "i")}]},function(err, user) {
//        if (err) return res.status(500).send(err);
//        if (!user) {
//            console.log("in if error");
//            res.status(401).json({
//                'status': 'failure',
//                'message':"User doesn't exist"
//            });
//        }
//        else {
//            console.log("in organization by location successssss",user);
//            res.status(200).json({
//                'status': 'success',
//                'data':user,
//                'count':counter
//            });
//        }
//    }).skip((page)*100).limit(100);
//    }
//
//};

//exports.getOrganizationByName = function(req, res) {
//    var organization_name=req.query.name,
//        page=req.query.page;
//
//    console.log("calling organization by name",organization_name);
//    Organization.count({ "name": new RegExp('^'+organization_name+'$', "i")  },function(err,counter){
//        if(err){
//            console.log("error in counter of peoplelocation")
//        }
//        else{
//            console.log("success in counter of peoplelocation",counter);
//            getDatas(counter);
//        }});
//
//    function getDatas(counter){ Organization.find( { "name": new RegExp('^'+organization_name+'$', "i")  },function(err, user) {
//        if (err) return res.status(500).send(err);
//        if (!user) {
//            res.status(401).json({
//                'status': 'failure',
//                'message':"User doesn't exist"
//
//            });
//
//        }
//        else {
//            console.log("in organization by name successssss",user);
//            res.status(200).json({
//                'status': 'success',
//                'data':user,
//                'count':counter
//            });
//        }
//    }).skip((page)*100).limit(100);
//    }
//
//};


exports.getPersonDetails = function(req, res) {
    var userId = req.params.id;

    People.findOne({"_id":userId},function(err, user) {
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
    });
};

exports.getOrganizationDetails = function(req, res) {
    var userId = req.params.id;

    Organization.findOne({"_id":userId},function(err, user) {
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
    });
};
//exports.getPeopleByAll = function(req, res) {
//    var people_name=req.body.name,
//        people_title=req.body.title,
//        people_city=req.body.location,
//    // people_name=req.query.all.name,
//        page=req.body.page;
//
//
//    console.log("calling people by name",page);
//    console.log("calling people by name",people_name);
//    console.log("calling people by name",people_title);
//    console.log("calling people by name",people_city);
//    People.count({
//        $and: [
//            {$or: [ { "first_name":  new RegExp('^'+people_name+'$', "i") }, { "last_name":  new RegExp('^'+people_name+'$', "i") }]},
//            { "title":  new RegExp('^'+people_title+'$', "i")  },{$or: [ { "location_city": new RegExp('^'+people_city+'$', "i")}, { "location_region":  new RegExp('^'+people_city+'$', "i")} ,{"location_country_code":new RegExp('^'+people_city+'$', "i")}]}]},function(err,counter){
//        if(err){
//            console.log("error in counter of peoplelocation")
//        }
//        else{
//            getDatas(counter);
//        }});
//
//
//    function getDatas(counter){
//        People.find({
//            $and: [
//                {$or: [ { "first_name":  new RegExp('^'+people_name+'$', "i") }, { "last_name":  new RegExp('^'+people_name+'$', "i") }]},
//                { "title":  new RegExp('^'+people_title+'$', "i")  },{$or: [ { "location_city": new RegExp('^'+people_city+'$', "i")}, { "location_region":  new RegExp('^'+people_city+'$', "i")} ,{"location_country_code":new RegExp('^'+people_city+'$', "i")}]}]},function(err, user) {
//            if (err) return res.status(500).send(err);
//            if (!user) {
//                res.status(401).json({
//                    'status': 'failure',
//                    'message':"User doesn't exist"
//                });
//            }
//            else {
//                console.log("in people by title success",user);
//                res.status(200).json({
//                    'status': 'success',
//                    'data':user,
//                    'count':counter
//                });
//            }
//        }).skip((page)*100).limit(100);
//    }
//
//};

exports.getPeopleByAll = function(req, res) {
    var name=req.body.name,
        title=req.body.title,
        page=req.body.page,
        city=req.body.location;
    if(city == '') city = undefined;
    if(name == '') name = undefined;
    if(title == '') title = undefined;
    console.log(req.body.name);

    if ((name==null ||name== undefined) && (title==null ||title== undefined)&& (city!=null ||city== undefined))
    {
        //var nam= new RegExp('^'+name+'$', 'i'),
        //    titl=new RegExp('^'+title+'$', 'i'),
        var cit=new RegExp('^'+city+'$', 'i');
        //console.log(" this is var"+nam+" "+titl+" "+cit);
        //console.log("all",name,title,city);
        query =
        {"$or": [
            { 'location_city': cit},
            { 'location_region':  cit} ,
            {'location_country_code':cit}
        ]
        };
    }
    else if ((name==null ||name== undefined ) && (title!=null ||title== undefined)&& (city==null ||city== undefined))
    {
        // var nam= new RegExp('^'+name+'$', 'i'),
        var  titl=new RegExp('^'+title+'$', 'i');
        //  cit=new RegExp('^'+city+'$', 'i');
        // console.log(" this is var"+nam+" "+titl+" "+cit);
        // console.log("all",name,title,city);
        query =

        { 'title': titl  }

    }
    else if ((name!=null||name== undefined ) && (title==null ||title== undefined)&& (city==null ||city== undefined))
    {
        var nam= new RegExp('^'+name+'$', 'i'),
        //titl=new RegExp('^'+title+'$', 'i'),
        //cit=new RegExp('^'+city+'$', 'i');
        //console.log(" this is var"+nam+" "+titl+" "+cit);
        //console.log("all",name,title,city);
            query =  {"$or": [{ "first_name":nam},{ "last_name":nam}]};



    }
    else if ((name!=null ||name== undefined) && (title!=null ||title== undefined)&& (city==null ||city== undefined) )
    {
        var nam= new RegExp('^'+name+'$', 'i'),
            titl=new RegExp('^'+title+'$', 'i'),
        //cit=new RegExp('^'+city+'$', 'i');
        // console.log(" this is var"+nam+" "+titl+" "+cit);
        //console.log("all",name,title,city);
            query = {"$and": [ {"$or": [{ "first_name":nam},{ "last_name":nam}]},
                { 'title': titl  }
            ]};
    }
    else  if ((name!=null ||name== undefined) && (title==null ||title== undefined)&& (city!=null ||city== undefined))
    {
        var nam= new RegExp('^'+name+'$', 'i'),
        // titl=new RegExp('^'+title+'$', 'i'),
            cit=new RegExp('^'+city+'$', 'i');
        // console.log(" this is var"+nam+" "+titl+" "+cit);
        // console.log("all",name,title,city);
        query = {"$and": [ {"$or": [{ "first_name":nam},{ "last_name":nam}]},
            {"$or": [
                { 'location_city': cit},
                { 'location_region':  cit} ,
                {'location_country_code':cit}
            ]
            }
        ]};
    }
    else if ((name==null ||name== undefined) && (title!=null ||title== undefined)&& (city!=null ||city== undefined) )
    {
        //  var nam= new RegExp('^'+name+'$', 'i'),
        var  titl=new RegExp('^'+title+'$', 'i'),
            cit=new RegExp('^'+city+'$', 'i');
        //  console.log(" this is var"+nam+" "+titl+" "+cit);
        // console.log("all",name,title,city);
        query = {"$and": [
            { 'title': titl  },
            {"$or": [
                { 'location_city': cit},
                { 'location_region':  cit} ,
                {'location_country_code':cit}
            ]
            }
        ]};
    }
    else{
        var nam= new RegExp('^'+name+'$', 'i'),
            titl=new RegExp('^'+title+'$', 'i'),
            cit=new RegExp('^'+city+'$', 'i');
        console.log(" this is var"+nam+" "+titl+" "+cit);
        console.log("all",name,title,city);
        query = {"$and": [ {"$or": [{ "first_name":nam},{ "last_name":nam}]},

            { 'title': titl  },

            {"$or": [
                { 'location_city': cit},
                { 'location_region':  cit} ,
                {'location_country_code':cit}
            ]
            }
        ]};
    }


    console.log("calling people by name",page);
    console.log("calling people by name",name);
    console.log("calling people by name",title);
    console.log("calling people by name",city);
    People.count(query,function(err,counter){
        if(err){
            console.log("error in counter of peoplelocation")
        }
        else{
            getDatas(counter);
        }});


    function getDatas(counter){
        People.find(query,function(err, user) {
            if (err) return res.status(500).send(err);
            if (!user) {
                res.status(401).json({
                    'status': 'failure',
                    'message':"User doesn't exist"
                });
            }
            else {
                console.log("in people by title success",user);
                res.status(200).json({
                    'status': 'success',
                    'data':user,
                    'count':counter
                });
            }
        }).skip((page)*100).limit(100);
    }

};


//// **
//    Organization
//
//    **//

exports.getOrganizationByAll = function(req, res) {
    var name=req.body.name,
        page=req.body.page,
        city=req.body.location;
    if ((!name) && (city))
    {
        var Regcity=new RegExp('^'+city+'$', 'i');
        query =
        {"$or": [
            { 'location_city': Regcity},
            { 'location_region':  Regcity} ,
            {'location_country_code':Regcity}
        ]
        };
    }

    else if ((name) && (!city))
    {
        var Regname= new RegExp('^'+name+'$', 'i'),
            query =  { "name":Regname};
    }
    else
    {
        var Regname= new RegExp('^'+name+'$', 'i'),
            Regcity=new RegExp('^'+city+'$', 'i'),
            query = {"$and": [{ "name":Regname}, {"$or": [
                { 'location_city': Regcity},
                { 'location_region':  Regcity} ,
                {'location_country_code':Regcity}
            ]
            }
            ]};
    }

    console.log("calling people by name",page);
    console.log("calling people by name",name);
    //console.log("calling people by name",title);
    console.log("calling people by name",city);
    Organization.count(query,function(err,counter){
        if(err){
            console.log("error in counter of peoplelocation")
        }
        else{
            getDatas(counter);
        }});
    function getDatas(counter){
        Organization.find(query,function(err, user) {
            if (err) return res.status(500).send(err);
            if (!user) {
                res.status(401).json({
                    'status': 'failure',
                    'message':"User doesn't exist"
                });
            }
            else {
                console.log("in people by title success",user);
                res.status(200).json({
                    'status': 'success',
                    'data':user,
                    'count':counter
                });
            }
        }).skip((page)*100).limit(100);
    }

};