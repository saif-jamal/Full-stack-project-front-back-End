
const initialSate ={
    Products:[],
    ProductImage:[],
    ProductTags:[],
    Categories:[],
    Users:[],
    ShoppingBasket:[],
    wishlist_data:[]
}
const AllAPIData=(state=initialSate,action)=>{
   switch(action.type){
      case 'apiProducts':
         return {
          ...state,
            Products:action.products
          }
      case 'apiProductsImage':
         return {
          ...state,
          ProductImage:action.productsImage
          }
      case 'apiProductsTags':
            return {
             ...state,
             ProductTags:action.productsTags
             }
       case 'apiCategories':
            return {
             ...state,
             Categories:action.productsCategories
            }
       case 'apiusers':
           return{
               ...state,
               Users:action.users
           }
        case 'shoppingbasketproduct':
            return{
                ...state,
               ShoppingBasket:action.AllShoppingBasketProduct
            }
       case 'wishlist_data_action':
           return{
            ...state,
            wishlist_data:action.wishlist_data   
           }
       default: 
       return state; 
   }
};
export {AllAPIData};
