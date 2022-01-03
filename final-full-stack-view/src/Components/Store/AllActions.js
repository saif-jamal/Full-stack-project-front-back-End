

const getapiProducts=(Allproducts)=>{
    return{
        type:"apiProducts",
        products:Allproducts?Allproducts:['no data']
    }
};


const getapiProductsImage=(AllproductsImage)=>{
    return{
        type:"apiProductsImage",
        productsImage:AllproductsImage?AllproductsImage:['no data']
    }
};


const getapiProductsTags=(AllproductsTags)=>{
    return{
        type:"apiProductsTags",
        productsTags:AllproductsTags?AllproductsTags:['no data']
    }
};

const getapiCategories=(AllCategories)=>{
    return{
        type:"apiCategories",
        productsCategories:AllCategories?AllCategories:['no data']
    }
};

const getapiUsers=(Allusers)=>{
    return{
        type:"apiusers",
        users:Allusers?Allusers:['no data']
    }
};

const ShoppingBasket=(shoopingproduct)=>{
    return{
        type:"shoppingbasketproduct",
        AllShoppingBasketProduct:shoopingproduct?shoopingproduct:['no data']
    }
};

const wishlist_data=(wishlist_data)=>{
    return{
        type:"wishlist_data_action",
        wishlist_data:wishlist_data?wishlist_data:''
    }
};
export {getapiProducts,getapiProductsImage,getapiProductsTags,getapiCategories,getapiUsers,wishlist_data,ShoppingBasket};