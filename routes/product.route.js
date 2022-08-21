const { Router } = require('express');
const router = Router();
const { productController } = require("../controllers/product.controller")
const authMiddleware = require("../middleware/auth.middleware")

router.post('/product', productController.addProduct);
router.get('/product', productController.getProducts);
router.patch('/product/:id', productController.patchProduct);
router.delete('/product/:id', productController.deleteProduct);
router.get('/product/costums', productController.getCostums);
router.get('/product/rubashki', productController.getRubashki);
router.get('/product/chasi', productController.getChasi);
router.get('/product/bruks', productController.getBruks);
router.get('/product/obuv', productController.getObuv);
router.get('/product/ochki', productController.getOchki);



module.exports = router;