// render routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homepage');



// route for Home
router.use('/homepage', homepageRoutes);
router.use('/api', apiRoutes);

module.exports = router;