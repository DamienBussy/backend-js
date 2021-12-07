const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');

// Route pour créé un user
// exports.router = (function(){
//     const apiRouter = express.Router();
//     apiRouter.route('/createuser').get(usersCtrl.getCreateUser);
//     return apiRouter;
// })();

// Route de tout les users
exports.router = (function(){
    const apiRouter = express.Router();
    apiRouter.route('/users').get(usersCtrl.getAllUsers);
    return apiRouter;
})();

// Route pour avoir un seul user en fonction de l'id
// exports.router = (function(){
//     const apiRouter = express.Router();
//     apiRouter.route('/oneuser').get(usersCtrl.getOneUser);
//     return apiRouter;
// })();

// Route pour modifier un user
// exports.router = (function(){
//     const apiRouter = express.Router();
//     apiRouter.route('/updateuser').get(usersCtrl.getUpdateUser);
//     return apiRouter;
// })();

// Route pour supprimer un user
// exports.router = (function(){
//     const apiRouter = express.Router();
//     apiRouter.route('/deleteuser').get(usersCtrl.getDeleteUser);
//     return apiRouter;
// })();