// imports
const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
// route to update a blogpost *this is different but similar to line 7*
// route to create a new blogpost

module.exports = router;