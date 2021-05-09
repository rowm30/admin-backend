const express = require('express');
var router = express.Router();

var { technojamMembers } = require('../models/technojamMembers')

router.get('/' , (req,res) => {
    technojamMembers.find((err,docs)=>{
        if(!err){res.send(docs);}
        else { console.log('Error in Retriving Members: ' + JSON.stringify(err, undefined, 2));}
    });
})

router.post('/', (req, res)=>{
    var mem = new technojamMembers({
        name: req.body.name,
        batch: req.body.batch,
        role: req.body.role,
        votes: req.body.votes
    });
    mem.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in Employee save: ' + JSON.stringify(err,undefined,2));}
    })
})

module.exports = router;