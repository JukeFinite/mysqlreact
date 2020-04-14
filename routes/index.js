const router = require('express').Router();


// Getting / prepended to everything
// Hey I declared routes here.
const apiRoutes = require('./apiRoutes');


// /something was prepended to every route inside of here
// Prepend /api to all of the routes declared inside of apiRoutes
//  /api

// This will prepend /api to anyroute declared within apiRoutes
router.use('/api', apiRoutes);



module.exports = router;