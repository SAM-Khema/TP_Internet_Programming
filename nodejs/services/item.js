const Items = require("../models/items");

const findById = async (id) => {
  try {
    return {
      success: true,
      data: {}
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const findAll = async () => {
  return await Items.find().populate('category');
}

const create = async (newItem) => {
  // to do
  const createdItem = await Items.create(newItem);
  return createdItem;
}

const update = async (id, { name,category, desc  }) => {
  // to do
  try {
    const update = await Items.findByIdAndUpdate(id, { name,category, desc  })

    return {
            success: true,
            data: update,
            msg: "Update successfully!"
    }
}
catch (err) {
    return {
            success: false,
            error: err
    }
}
}

const remove = async () => {
  // to do
  try{
    await Items.findByIdAndDelete(id)
    return{
            success: true,
            data: "Item delete successfully~"
    }
}
catch(err){
    return{
            success: false,
            err: err.message 
    }
  
}
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create,
}