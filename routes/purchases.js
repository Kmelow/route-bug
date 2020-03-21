const express = require('express');
const {
  getPurchases,
  getUserPurchase,
  getPurchase,
  getPackagePurchase,
  registerPurchase,
  deletePurchase
} = require('../controllers/purchases');

const router = express.Router();

router.get('/', getPurchases);
router.post('/', registerPurchase);
router.get('/:id', getPurchase);
router.get('/user/:id', getUserPurchase);
router.get('/package/:id', getPackagePurchase);
router.delete('/:id', deletePurchase);

module.exports = router;
