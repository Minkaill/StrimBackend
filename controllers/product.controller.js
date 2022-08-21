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
      
      res.json(setArr.setProducts)
    } catch (error) {
      res.json(error);
    }
  },

  getChasi: async (req, res) => {
    try {
      res.json(await Product.find({category: 'Часы'}))
    } catch (error) {
      res.json(error);
    }
  },
  
  getBruks: async (req, res) => {
    try {
      res.json(await Product.find({category: 'Брюки'}))
    } catch (error) {
      res.json(error);
    }
  },
  
  getOchki: async (req, res) => {
    try {
      res.json(await Product.find({category: 'Очки'}))
    } catch (error) {
      res.json(error);
    }
  },
  
  getObuv: async (req, res) => {
    try {
      res.json(await Product.find({category: 'Обувь'}))
    } catch (error) {
      res.json(error);
    }
  },
  
  getRubashki: async (req, res) => {
    try {
      res.json(await Product.find({category: 'Рубашки'}))
    } catch (error) {
      res.json(error);
    }
  },

  getCostums: async (req, res) => {
    try {
      res.json(await Product.find({category: 'Костюмы'}))
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