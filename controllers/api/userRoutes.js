const router = require('express').Router();
const { User } = require('../../models/User');
const withAuth = require('../../utils/auth');

// sign up route
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in
        });
    } catch(err) {

    }
})
// route for login

// route for logout

module.exports = router;