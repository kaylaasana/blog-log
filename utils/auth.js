// set up a function that checks if the user has logged in
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        // redirects the user to login page
      res.redirect('/login');
    } else {
        // if user is logged in, proceed with request
      next();
    }
  };
  
module.exports = withAuth;
  