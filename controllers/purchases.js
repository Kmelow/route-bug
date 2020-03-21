exports.getPurchases = (req, res, next) => {
  res.status(200).json(`getPurchases`);
  next();
};

exports.getUserPurchase = (req, res, next) => {
  res.status(200).json(`getUserPurchase by user id ${req.params.id}`);
  next();
};

exports.getPurchase = (req, res, next) => {
  res.status(200).json(`getPurchase by id ${req.params.id}`);
  next();
};

exports.getPackagePurchase = (req, res, next) => {
  res.status(200).json(`getPackagePurchase for package ${req.params.id}`);
  next();
};

exports.registerPurchase = (req, res, next) => {
  res.status(200).json(`registerPurchase`);
  next();
};

exports.deletePurchase = (req, res, next) => {
  res.status(200).json(`deletePurchase by id ${req.params.id}`);
  next();
};
