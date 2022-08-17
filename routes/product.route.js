const { Router } = require('express');
const router = Router();
const { productController } = require("../controllers/product.controller")
const authMiddleware = require("../middleware/auth.middleware")

router.post('/product', productController.addProduct);
<<<<<<< HEAD
router.get('/product', authMiddleware, productController.getProducts);
=======
router.get('/product', productController.getProducts);
>>>>>>> 70d67e10576df745784894fe578afc350c24317b
router.patch('/product/:id', productController.patchProduct);
router.delete('/product/:id', productController.deleteProduct);


module.exports = router;