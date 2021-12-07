const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');

exports.router = (function(){
    const apiRouter = express.Router();
    // CreateUser
    apiRouter.route('/createuser').post(usersCtrl.CreateUser);
    // getAllUsers
    apiRouter.route('/users').get(usersCtrl.getAllUsers);
    // getAllUsers
    apiRouter.route('/oneuser').get(usersCtrl.getOneUser);
    // DeleteUser
    apiRouter.route('/deleteuser').delete(usersCtrl.DeleteUser);
    // UpdateUser
    apiRouter.route('/updateuser').put(usersCtrl.UpdateUser);
    return apiRouter;
})();