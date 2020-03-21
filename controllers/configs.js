exports.getConfig = (req, res, next) => {
  res.status(200).json(`getConfig`);
  next();
};

exports.updateConfig = (req, res, next) => {
  res.status(200).json(`updateConfig`);
  next();
};
