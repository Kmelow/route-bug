const express = require('express');
const {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers
} = require('../controllers/users');

const router = express.Router();

router.get('/', getUsers);
router.post('/', postUsers);
router.put('/', putUsers);
router.delete('/', deleteUsers);

module.exports = router;
