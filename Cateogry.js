function Category(_title) {
  const id = Date.now()
  const title = _title;
  const posts = [];


}

function cateogries() {
  const items = [];
  const createCategory(title) {
    categories.push(new Category(title))
  }

  const updateCateogry(id) {

  }


  const deleteCategory(id) {

  }

  const render () => {
    // create container element
    items.forEach(() => {
      // append each cat to the container elm
    })
  }

  return {
    categories,
    createCategory,
    updateCateogry,
    deleteCategory,
  }
}


const app = () => {
  const cateogries 
}