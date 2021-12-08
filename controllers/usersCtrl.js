const models = require('../models');

module.exports = {
    // Créé un user  
    CreateUser: function (req, res) 
    {
        models.User.create({ firstname: req.body.firstname, lastname: req.body.lastname }        
        ).then(function (user) {        
        res.status(201).json(user)        
        })
    },

    // Tout les users
    getAllUsers:function(req, res)
    {
        models.User.findAll()
        .then(function(user) {
            res.status(201).json(user)
          })
    },

    //Un seul user
    getOneUser:function(req, res)
    {
        models.User.findOne({where:{id: req.body.id}}
        ).then(function(user) {
            res.status(201).json(user)
        })
    },

    // Update un user
    UpdateUser:function(req, res)
    {
        models.User.update({ firstname: req.body.firstname, lastname : req.body.lastname } , { where: { id: req.body.id } })
        .then(function(user) {
            res.status(201).json(user)
        })
    },

    // Delete un user
    DeleteUser:function(req, res)
    {
        models.User.destroy({ where: { id: req.body.id } })
        .then(function(user) {
            res.status(201).json(user)
        })
    }
};
