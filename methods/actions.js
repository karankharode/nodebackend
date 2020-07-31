var User = require('../models/user')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNew : function (req, res){
        if ((!req.body.name) || (!req.body.password)){
            res.json({success: false,msg : 'Enter all fields'})
        }
        else{
            var newUser = User({
                name: req.body.name,
                password: req.body.password
            });
            newUser.save(function(err, newUser){
                if(err){
                    res.json({success: false, msg: 'Failed to save'})
                }
                else{
                    res.json({success:true,msg : 'Succesfully saved'})
                }
            })
        }
    }
}

module.exports = functions