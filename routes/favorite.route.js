const { Router } = require('express');
const router = Router();
const { favoriteController } = require('../controllers/favorite.controller');

router.get('/favorite/:userId', favoriteController.getFavorite);
// router.post('/cart/:userId', cartController.postCart);
router.post('/favorite/add/:userId',  favoriteController.productAddFavorite);
// router.patch('/cart/inc/:userId', cartController.productIncCart);
// router.patch('/cart/dec/:userId', cartController.productDecCart);
router.delete('/favorite/delete/:userId', favoriteController.productDeleteFavorite)
// router.delete('/cart/reset/:userId', cartController.productResetCart)


module.exports = router;