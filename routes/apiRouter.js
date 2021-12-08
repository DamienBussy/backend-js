const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');

exports.router = (function(){
    const apiRouter = express.Router();
    // CreateUser C
    apiRouter.route('/createuser').post(usersCtrl.CreateUser);
    // getAllUsers R
    apiRouter.route('/users').get(usersCtrl.getAllUsers);
    // getAllUsers R
    apiRouter.route('/oneuser').get(usersCtrl.getOneUser);
    // UpdateUser U
    apiRouter.route('/updateuser').put(usersCtrl.UpdateUser);
    // DeleteUser D
    apiRouter.route('/deleteuser').delete(usersCtrl.DeleteUser);

    return apiRouter;
})();