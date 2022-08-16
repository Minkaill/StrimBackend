const Favorite = require('../models/Favorite.model.js')
const Product = require('../models/Product.model.js')

module.exports.favoriteController = {
    productAddFavorite: async (req, res) => {
        try {
            const { cartId } = req.params
            const { product } = req.body

            const setProduct = await Product.findById(product)

            if (setProduct.left < 1) {
                return res.json("Нет на складе")
            }

            await Cart.findByIdAndUpdate(cartId, {
                $push: {
                    products: {
                        productId: product
                    }
                }
            })

            await Product.findByIdAndUpdate(product, {
                left: setProduct.left - 1
            })

            res.json("Успешно добавлен в корзину")

        } catch (e) {
            res.json(e)
        }
    },
    productIncCart: async (req, res) => {
        try {
            const { cartId } = req.params
            const { product } = req.body

            const setCart = await Cart.findById(cartId)
            const setProduct = await Product.findById(product)

            if (setProduct.left < 1) {
                return res.json("Нет на складе")
            }

            const setProducts = setCart.products.map((el) => {
                if (String(el.productId) === String(setProduct._id)) {
                    el.amount += 1
                }
                // res.json(el.productId)
                return el
            })



            await Cart.findByIdAndUpdate(cartId, {
                products: setProducts
            })

            await Product.findByIdAndUpdate(product, {
                left: setProduct.left - 1
            })

            // res.json(setProducts)
            res.json(await Cart.findById(cartId))

        } catch (e) {
            res.json(e)
        }
    },
    productDecCart: async (req, res) => {
        try {
            const { cartId } = req.params
            const { product } = req.body

            const setCart = await Cart.findById(cartId)
            const setProduct = await Product.findById(product)

            const setProducts = setCart.products.map((el) => {
                if (String(el.productId) === String(setProduct._id)) {
                    el.amount -= 1
                    return el
                }
                // res.json(el.productId)
                return el
            })



            await Cart.findByIdAndUpdate(cartId, {
                products: setProducts
            })

            await Product.findByIdAndUpdate(product, {
                left: setProduct.left + 1
            })

            // res.json(setProducts)
            res.json(await Cart.findById(cartId))

        } catch (e) {
            res.json(e)
        }
    },
}

//{ "name": "Rabek", "surname": "Rabekov", "phone": "8999999999-000", "icon": "srcggggggg", "login": "aleksej223", "password": "0369" }