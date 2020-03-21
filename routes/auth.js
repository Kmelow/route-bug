const express = require('express');

const router = express.Router();

router.post('/register', (req, res) => {});

router.get('/login', (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  // Validate email and password
  if (!password || !email) {
    return next(
      new ErrorResponse('Please provide valid email and password'),
      400
    );
  }

  res.status(200).json('Login');

  // // Check for user
  // const user = await User.findOne({ email }).select('+password');

  // if (!user) {
  // 	return next(new ErrorResponse('Invalid credentials'), 401);
  // }

  // // Check if password matches
  // const isMatch = await user.matchPassword(password);

  // if (!isMatch) {
  // 	return next(new ErrorResponse('Invalid credentials'), 401);
  // }

  // return sendTokenResponse(user, 200, res, next);
});

module.exports = router;
