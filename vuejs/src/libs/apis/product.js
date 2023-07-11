var product = {
  async create({ title, category, item, imageUrl, desc }) {
    const res = await fetch("http://localhost:3001/product/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, category, item, imageUrl, desc  }),
    });

    const result = await res.json();
    return result;
  },
  async all() {
    const res = await fetch("http://localhost:3001/product/all", {
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
  async delete({id, title, category, item, imageUrl, desc}){
    await fetch(`http://localhost:3001/product/delete/`,{
            method: "POST",
            credentials: "include",
            headers: {
                    "Content-type": "application/json",
            },
            body: JSON.stringify({ _id:id, title, category, item, imageUrl, desc  }),
    });
    const result = await res.json();
    return result;
},
async getallproduct(categoryId, itemId){
    if(categoryId == ""){
            const res = await fetch('http://localhost:3001/product/all',{
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    origin: 'http://localhost:3000'
                }
            })
            const result = res.json();
            return result
        }else{
            const res = await fetch(`http://localhost:3001/product/all/${categoryId}/${itemId}`,{
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    origin: 'http://localhost:3000'
                }
            })
            const result = res.json();
            return result
        }
},
async update({id, title, category, item, imageUrl, desc}){
  const res= await fetch(`http://localhost:3001/product/update/`,{
            method: "POST",
            credentials: "include",
            headers: {
                    "Content-type": "application/json",
                    // Origin: "http://localhost:3000",
            },
            body: JSON.stringify({_id:id, title, category, item, imageUrl, desc}),
    });
    const result = await res.json();
    return result;
},
 
}

export default product
