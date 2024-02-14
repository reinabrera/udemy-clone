import categories from "../data/categories"
import subcategories from "../data/subcategories"

export const getCategoryAndSubcategory = {
  getCategory: (id) => {
    const subcategory = subcategories.find((item) => item.id === id);
    if (subcategory) {
      return categories.find((item) => item.id === subcategory.category_id)
    }
  },
  getSubcategory: (id) => {
    return subcategories.find((item) => item.id === id);
  },
};