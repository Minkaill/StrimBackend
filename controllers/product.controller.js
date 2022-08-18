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



  // getProducts: async (req, res) => {
  //   try {
  //     const { category, data } = req.body
  //     const setProducts = {
  //       set: null
  //     }
  //     if (String(type) === 'category') {
  //       setProducts.set = await Product.find({ category: data })
  //       res.json(setProducts.set);
  //     }
  //   } catch (error) {
  //     res.json(error);
  //   }
  // },


  getProducts: async (req, res) => {
    try {
      const getAllProducts = await Product.find()
      res.json(getAllProducts)
    } catch (error) {
      res.json(error)
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