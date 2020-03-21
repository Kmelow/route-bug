exports.getUsers = async (req, res) => {
  res.status(200).json('getUsers');
};

exports.getUser = async (req, res) => {
  res.status(200).json(`getUser ${req.params.id} by id`);
};

exports.updateUser = async (req, res) => {
  res.status(200).json(`updateUsers ${req.params.id}`);
};

exports.deleteUser = async (req, res) => {
  res.status(200).json('deleteUser by id');
};
