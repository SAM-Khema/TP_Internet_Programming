<script>
import categoryApi from "@/libs/apis/category";
export default {
  data() {
    return {
      categories: [],
      name: "",
      desc: "",
      imageUrl: "",
      formatLable: "Add new",
      isonEdit: false,
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const { id, name, desc, imageUrl } = this;
      let result;
      if (!this.isonEdit) {
        result = await categoryApi.create({ name, desc, imageUrl });
      } else if (this.isonEdit) {
        result = await categoryApi.update({ id, name, desc, imageUrl });
        this.isonEdit = false;
      }
      if (!result) {
        alert(result.error);
        return;
      }
      this.formatLable = "Add new";
      this.categories = await categoryApi.all();
      this.name = this.desc = this.imageUrl = "";
    },
    updatecate(data) {
      this.id = data._id;
      this.name = data.name;
      this.desc = data.desc;
      this.imageUrl = data.imageUrl;
      this.isonEdit = true;
      this.formatLable = "update";
    },
    cancel() {
      this.id = "";
      this.name = "";
      this.desc = "";
      this.imageUrl = "";
      this.isonEdit = false;
      this.formatLable = "Add new";
    },
    async deletecate(cateID) {
      await categoryApi.delete(cateID);
      this.categories = await categoryApi.all();
      this.categories = this.categories.data;
    },
  },
  async mounted() {
    this.categories = await categoryApi.all();
  },
};
</script>

<template>
  <main>
    <div class="bg-gray-500 text-white py-2 text-lg text-center">
      <h1>Category</h1>
    </div>

    <div class="py-2">
      <form @submit="onSubmit" method="post">
        <div class="flex flex-row py-2 px-2 space-x-2 bg-gray-100">
          <div>
            <input
              v-model="name"
              name="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              v-model="desc"
              name="desc"
              type="text"
              placeholder="Description"
              required
            />
          </div>
          <div>
            <input
              v-model="imageUrl"
              name="imageUrl"
              type="text"
              placeholder="ImageURL"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              class="bg-blue-500 text-white p-1 px-2 rounded-md"
            >
              {{ formatLable }}
            </button>
            <button
              type="submit"
              class="bg-blue-500 text-white p-1 px-2 rounded-md"
              @click="cancel()"
              v-if="isonEdit"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
    <div>
      <table id="customers">
        <tr class="bg-gray-200">
          <th>Name</th>
          <th>Description</th>
          <th>ImageURL</th>
          <th>Action</th>
        </tr>

        <tr v-for="cate in categories" :key="cate.name">
          <td>{{ cate.name }}</td>
          <td>{{ cate.desc }}</td>
          <td>{{ cate.imageUrl }}</td>
          <td>
            <div class="flex flex-col space-y-2">
              <button
                class="hover:text-green-600 hover:font-bold"
                @click="updatecate(cate)"
              >
                Edit
              </button>
              <button
                class="hover:text-green-600 hover:font-bold"
                @click="deletecate(cate)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
</style>
