const Product = require('../models/Product.model.js');
const mongoose = require('mongoose');

module.exports.productController = {
  addProduct: async (req, res) => {
    try {
      const add = await Product.create({
        ...req.body
      }
      )
      res.json('Сохраненка добавлена');
    } catch (error) {
      res.json("error")
    }
  },


  
  getProducts: async (req, res) => {
    try {
      const { category, size } = req.body
      const setArr = {
        setProducts: null
      }
      if (category && size) {
        setArr.setProducts = await Product.find({category, size})
      } else if (category) {
        setArr.setProducts = await Product.find({category})
      } else if (size) {
        setArr.setProducts = await Product.find({size})
      } else {
        setArr.setProducts = await Product.find()
      }
      console.log(setArr.setProducts)
      res.json('gg')
    } catch (error) {
      res.json(error);
    }
  },


  patchProduct: async (req, res) => {
    try {
      const patch = await Product.findByIdAndUpdate(req.params.id, {
        ...req.body
      }
      )
      res.json('Заметка изменена')
    } catch (error) {
      res.json(error);
    }
  },



  deleteProduct: async (req, res) => {
    try {
      const dele = await Product.findByIdAndRemove(req.params.id)
      res.json("Лайк удален")
    } catch (error) {
      res.json(error);
    }
  },



}