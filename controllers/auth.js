exports.login = (req, res, next) => {
  const { email, password } = req.params;

  console.log(`Login for email ${email} with pass ${password}`);

  // Validate email and password
  // if (!password || !email) {
  //   return res.status(404).json('Please provide email and password');
  // return next(
  //   new ErrorResponse('Please provide valid email and password'),
  //   400
  // );
  // }

  return res.status(200).json('Login');

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
};

exports.register = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  res
    .status(200)
    .json(
      `Resgistration for ${firstName} ${lastName} - ${email} with pass: ${password}`
    );
};
