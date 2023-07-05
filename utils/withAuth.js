const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.loggedIn) {
    //   res.redirect('/login');
    res.status(401).json({ message: "You are not logged in!" });
  } else {
    next();
  }
};

module.exports = withAuth;
