var cartProducts = []

export const cartReducer = (state = cartProducts, action) => {
    switch (action.type) {
        case ("DELETEFROMCART"):
            action.product.qty += action.product.cart;
            action.product.cart = 0;
            state = state.filter((product) => product !== action.product);
            return state

        case ("ADDTOCART"):
            let flag = 0;
            state.map((element) => {
                if (element === action.product) {
                    flag = 1;
                }
            })
            if (!flag)
                return [...state, action.product];
            return state;
    }
    return state;
};





