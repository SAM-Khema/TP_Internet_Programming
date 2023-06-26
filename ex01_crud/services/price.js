const Prices = require("../models/prices");

const findAll = async () => {
  // to do
  try {
    console.log("Run");
    const items = await Prices.find()
    console.log(Prices);
    return {
      success: true,
      data: Prices
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}

const create = async (newPrice) => {
  // to do
  const createdPrice = await Prices.create(newPrice);
  return createdPrice;
}

const update = async () => {
  // to do
}

const remove = async () => {
  // to doF
}

module.exports = {
  update,
  remove,
  findAll,
  create,
}