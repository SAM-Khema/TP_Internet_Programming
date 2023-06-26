
const Categories = require("../models/categories")

const findById = async (id) => {
  try {
    const category = await Categories.findById(id)
    return{
      success: true,
      data: category
    }
  } catch (error) {
    return{
      success: false,
      error: error.message
    }
  }
}

const findAll = async () => {
  try {
    const categories = await Categories.find()
    return{
      success: true,
      data: categories
    }
  } catch (error) {
    return{
      success: false,
      error: error.message
    }
  }
}

const findCategorizedItems = async () => {
  return await Categories.aggregate([
    {
      $lookup: {
        from: "items",
        localField: "_id",
        foreignField: "category",
        as: "items"
      }
    },
    {
      $project: {
        _id: 1,
        name: 1,
        desc: 1,
        imageUrl: 1,
        items: {
          _id: 1,
          name: 1,
          category: 1,
          desc: 1,
        }
      }
    }
  ])
}

const create = async (newCategory) => {
  try{
    const createCategory = await Categories.create(newCategory);
    return {
      success: true,
      data: createCategory 
    }
  }catch(err){
    return {
      success : false,
      err : err.message
    }
  }
}

const update = async (categoryId,newCategory) => {
  try {
    const updateCategory = await Categories.findById(categoryId)
    updateCategory.name = newCategory.name
    updateCategory.desc = newCategory.desc
    updateCategory.imageUrl = newCategory.imageUrl
    await updateCategory.save()
    return{
      success: true,
      data: updateCategory
    }
  } catch (error) {
    return{
      success: false,
      error: error.message
    }
  }
}

const remove = async (categoryId) => {
  try {
    await Categories.deleteOne({_id:categoryId})
    return{
      success: true,
      data: "The category deleted successfully!!"
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
  create,
  findCategorizedItems
}