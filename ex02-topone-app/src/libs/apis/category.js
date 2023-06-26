
var categoryApi = {
    async getCategoryItem() {
        const res = await fetch('http://localhost:3001/category/categorized-items')
        const result = await res.json();
        return result
    }
}

export default categoryApi