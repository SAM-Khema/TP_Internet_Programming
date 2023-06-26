<script>
import categoriesApi from '../libs/apis/category'
import productsApi from '../libs/apis/product'
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      categories: [],
      products: []
      
    }
  },
  async mounted() {
    this.categories = await categoriesApi.getCategoryItem();
    this.products = await productsApi.getAllProduct("", "");
    // console.log(this.categories);
    
    let response_products = await axios.get(
      "http://localhost:3001/product/id"
    );
    response_products.data.forEach((data) => {
      this.products.push(data);
    });

    let reponse_categories = await axios.get(
      "http://localhost:3001/category/id"
    );
    reponse_categories.data.forEach((data) => {
      this.categories.push(data);
    });

  },

  methods: {
    async onClick(categoryId, itemId){
      // this.products = await productsApi.getAllProduct(categoryId, itemId)
      let response_products = await axios.get("http://localhost:3001/item/all" + itemId)
      this.products = []
      response_products.data[0].products.forEach((data) => {
        this.products.push(data)
      })
    },
    
  }
}
</script>

<template>
  <div>
    <div class="header" style="background-color: burlywood;">
      <div >
        លេខមួយ.com 
        </div>
      </div>
    <div class="content">
      <div class="sideBar">
        <ul>
          <li class="category" v-for="category in categories" :key="category._id">
            <a href="#" @Click="onClick(category._id,'')">{{category.name}}</a>
            <ul>
              <li class="item" v-for="item in category?.items" :key="item._id">
                <a href="#" @click="onClick(item.category, item._id)">{{item.name}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="listing">
        <div v-for="product in products" :key="product._id">
          <div class="product">
            <div class="image">
              <img :src="product.imageUrl" alt="imgLogo" style="width: 150px; height: 200px;">
            </div>
            <div class="cat">
              <div> {{product.title}}</div>
            <div>{{product.price}}$</div>
            </div>
            <div class="price">
              <div class="shop">shop</div>
              <div class="value">10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.header{
  height: 50px;
  font-size: 30px;
  border: 2px solid black;
}
.content{
  display: flex;
}
.sideBar{
  width: 20%;
  height: 500px;
  margin: 20px;
  border: 2px solid black;
}
.listing{
  margin: 20px;
  display: grid;
  height: 100%;
  border: 2px solid black;
  width: 75%;
  grid-template-columns: 2fr 2fr 2fr;
}
.category{
  text-align: left;
  padding-bottom: 10px;
}
.item{
  padding-top: 5px;
}
a{
  text-decoration: none;
  color: black;
}
img{
  width: 100%;
}

.product{
  padding: 10px;
  margin: 10px;
  border: 2px solid black;
}
.price{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.cat{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
/* .shop{
  width: 50%;
  text-align: left;
  padding-left: 20px;
} */
/* .value{
  width: 50%;
  text-align: right;
  padding-right: 20px;
} */
</style>