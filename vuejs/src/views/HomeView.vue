<script >
import category from '../libs/apis/category';
import product from '../libs/apis/product';

export default {
  components: {},
  data() {
    return {
      categories: [],
      products: []
    }
  },
  async mounted() {
    this.categories=await category.all();
    this.products=await product.all();
    console.log(this.categories);

  },
  methods: {
    async onClick(categoryId,itemId){
      this.products=await product.all(categoryId,itemId)
    }
  },
};
</script>

<template>
  <main>
    <div class="bg-gray-100 py-2 text-center text-lg relative">
      TopOne.com

      <div
        class="
          absolute
          text-white
          right-2
          top-2
          bg-gray-400
          px-2
          rounded-md
          cursor-pointer
        "
      >
        <router-link to="/dashboard"><div class="">Dashboard</div></router-link>
      </div>
    </div>
    <div class="content">
      <div class="sidebar">
    <ul>
      <li class="category" v-for="category in categories" :key="category._id">
        <a href="#" @click="onClick(category._id)">{{ category.name}}</a>
        <!-- <ul>
          <li class="item" v-for="item in category?.items" :key="item._id"></li>
          <a href="#" @click="onClick(item.category,item._id)">{{item.name }}</a>
        </ul> -->
        <div class="" v-for="item in category?.items" :key="item._id"  >
              <div class="pl-3">{{ item.name }}</div>
        </div>

      </li>
    </ul>
   </div>
   <div class="listing">
        <div v-for="product in products" :key="product._id">
          <div class="product">
            <div class="image">
              <img :src="product.imageUrl" alt="imgLogo" style="width: 50%; height: 200px; ">
            </div>
            <div class="cat">
              <div> {{product.title}}</div>
            <div>{{product.price}}$</div>
            </div>
            <div class="price">
              <div class="shop">shop</div>
              <div class="value">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </main>
</template>

<style>
img{
  width: 100%;
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
.product{
  padding: 10px;
  margin: 10px;
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
</style>