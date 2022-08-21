const Favorite = require('../models/Favorite.model.js')
const Product = require('../models/Product.model.js')
const User = require('../models/User.model.js')

module.exports.favoriteController = {
    getFavorite: async (req, res) => {
        try {
            const { userId } = req.params
            const setUser = await User.findById(userId)
            const setFavorite = await Favorite.find({
                userId: setUser._id
            })
            const setFavoriteId = String(setFavorite[0]._id)
            res.json(await Favorite.findById(setFavoriteId).populate('products'))
        } catch (e) {
            res.json(e)
        }
    },
    productAddFavorite: async (req, res) => {
        try {
            const { userId } = req.params
            const setUser = await User.findById(userId)
            const setFavorite = await Favorite.find({
                userId: setUser._id
            })
            const setFavoriteId = String(setFavorite[0]._id)

            const { product } = req.body

            await Favorite.findByIdAndUpdate(setFavoriteId, {
                $push: {
                    products: product
                }
            })
            
            
            res.json("Успешно добавлен в фавориты")
        } catch (e) {
            res.json(e)
        }
    },
    productDeleteFavorite: async (req, res) => {
        try {
            const { userId } = req.params
            const setUser = await User.findById(userId)
            const setFavorite = await Favorite.find({
                userId: setUser._id
            })
            const setFavoriteId = String(setFavorite[0]._id)

            const { product } = req.body
            
            const setProduct = await Product.findById(product)
            const setProducts = setFavorite.products.filter((el) => String(el.productId) !== String(setProduct._id))
            
            res.json("Успешно добавлен в фавориты")
            await Favorite.findByIdAndUpdate(setFavoriteId, {
                products: setProducts
            })
            
            
        } catch (e) {
            res.json(e)
        }
    },
}

//{ "name": "Rabek", "surname": "Rabekov", "phone": "8999999999-000", "icon": "srcggggggg", "login": "aleksej223", "password": "0369" }