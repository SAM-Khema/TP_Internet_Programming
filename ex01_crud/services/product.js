
const Products = require("../models/products")

var mongoose = require('mongoose');

const findById = async (id) => {
  const products = await Products.aggregate([
    {
      "$match": {
        _id: mongoose.Types.ObjectId(id),
      }
    },
    {
      $lookup: {
        from: "prices",
        localField: "_id",
        foreignField: "product",
        as: "prices"
      }
    }
  ])

  if (!products?.length)
    return null

  return products[0]
}

const findAll = async () => {
  const products = await Products.aggregate([
    {
      $lookup: {
        from: "prices",
        localField: "_id",
        foreignField: "product",
        as: "prices"
      }
    }
  ])

  if (!products?.length)
    return []

  return products
}
const create = async (newProduct) => {
  try {
    const createdProduct = await Products.create(newProduct);
    return{
      success: true,
      data: createdProduct
    }
  } catch (error) {
    return{
      success: false,
      error: error.message
    }
  }
}

const update = async (productId, newProduct) => {
  try {
    const updateProduct = await Products.findById(productId)
    updateProduct.title = newProduct.title
    updateProduct.price = newProduct.price
    updateProduct.category = newProduct.category
    updateProduct.item = newProduct.item
    updateProduct.user = newProduct.user
    await updateProduct.save()
    return{
      success: true,
      data: updateProduct
    }
  } catch (error) {
    return{
      success: false,
      error: error.message
    }
  }
}

const remove = async (productId) => {
  try {
    await Products.deleteOne({_id:productId})
    return{
      success: true,
      data: "The product deleted sucessfully!!"
    }
    
  } catch (error) {
    return{
      success: false,
      error: error.message
    }
  }
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}