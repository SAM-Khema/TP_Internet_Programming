var category = {
  async create({ name, desc, imageUrl }) {
    const res = await fetch("http://localhost:3001/category/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, desc, imageUrl }),
    });

    const result = await res.json();
    return result;
  },
  async all() {
    const res = await fetch("http://localhost:3001/category/categorized-items", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Origin: "http://localhost:3000",
      },
    });

    const result = await res.json();
    if (!result?.length) return [];

    return result;
  },
  async allcategory() {
    const res = await fetch("http://localhost:3001/category/all", {
            method: "GET",
            credentials: "include",
            headers: {
                    "Content-type": "application/json",
                    Origin: "http://localhost:3000",
            },
    });

    const result = await res.json();
    if (!result?.length) return [];
    return result;
},
  async update({id, name, desc, imageUrl }) {
    const res = await fetch("http://localhost:3001/category/update", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ _id:id,name, desc, imageUrl }),
    });

    const result = await res.json();
    return result;
  },
  async delete({id}){
          await fetch(`http://localhost:3001/category/delete`,{
                  method: "POST",
                  credentials: "include",
                  headers: {
                          "Content-type": "application/json",
                  },
                  body: JSON.stringify({ _id:id}),
          });
          const result = await res.json();
          return result;
  },
}

export default category
