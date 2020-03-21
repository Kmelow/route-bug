exports.getUsers = async (req, res) => {
  res.status(200).json('GET');
};

exports.postUsers = async (req, res) => {
  res.status(200).json(`POST`);
};

exports.putUsers = async (req, res) => {
  res.status(200).json(`PUT`);
};

exports.deleteUsers = async (req, res) => {
  res.status(200).json('DELETE');
};
