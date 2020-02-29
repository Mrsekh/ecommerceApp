export const addItemToCart = (cartItems,cartItemToadd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToadd.id);
    console.log(`existing item is ${existingItem} `);
    if(existingItem) {
       return cartItems.map(cartItem => cartItem.id === cartItemToadd.id 
       ? {...cartItem,quantity:cartItem.quantity + 1} 
       :cartItem
       )
    }
    return [...cartItems,{...cartItemToadd,quantity : 1}]
}