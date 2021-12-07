const models = require('../models');

module.exports = {
    // Créé un user
    getCreateUser:function(req, res)
    {
        models.User.create({ where: {id: 'id', firstname: 'firstname', lastname: 'lastname'} })
        .then(function(user) {
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
        models.User.findOne({id: 'id'})
        .then(function(user) {
            res.status(201).json(user)
        })
    },

    // Update un user
    getUpdateUser:function(req, res)
    {
        models.User.update({ where: {firstname: 'firstname', lastname: 'lastname'} })
        .then(function(user) {
            res.status(201).json(user)
        })
    },

    // Delete un user
    getDeleteUser:function(req, res)
    {
        models.User.delete(user)
        .then(function(user) {
            res.status(201).json(user)
        })
    }
};