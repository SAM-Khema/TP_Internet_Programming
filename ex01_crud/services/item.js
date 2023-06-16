const Items = require("../models/items");

const findAll = async ()=>{
  try {
    console.log("Run");
    const items = await Items.find()
    console.log(items);
    return {
      success: true,
      data: items
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}


const findById = async (id) => {
  try {
    const item = await Items.findById(id)
    return {
      success: true,
      data: item
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const create = async (newItem) => {
  try {
    const createdItem = await Items.create(newItem)
    return {
      success: true,
      data: createdItem
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const update = async (itemId, newItem) => {
  try {
    const updateItem = await Items.findById(itemId)
    updateItem.name = newItem.name
    updateItem.desc = newItem.desc
    updateItem.category = newItem.category
    await updateItem.save()
    return {
      success: true,
      data: updateItem
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const remove = async (itemId) => {
  try {
    await Items.deleteOne({_id:itemId})
    return{
      success: true,
      data: "The item deleted successfully!!"
    }
  } catch (error) {
    return{
      success: false,
      error: error.message
    }
  }
}
module.exports = {
  findAll,
  findById,
  update,
  remove,
  create,
}