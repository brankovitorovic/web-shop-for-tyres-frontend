import axios from 'axios'


export default {
    state:{
        cart: []
    },

    mutations: {
        loadCart(state, cartItems){
            state.cart = cartItems;
        },
    },

    actions: {
        addToCart({commit},cartItem){
            axios({url: "/cart/save", data: cartItem, method: "POST"})
            .then( () => {
                commit("loadCart");
            })
            .catch( err => console.log(err));
        },
        loadCart({commit}){
            axios({url: "/cart", method: "GET"})
            .then( resp => {
                commit("loadCart", resp.data);
            })
            .catch( () => commit("loadCart",[]));
        },
        removeItem({dispatch},item){
            axios({url: "/cart/delete",data: item, method:"POST"})
            .then( () => {
                dispatch("loadCart");
            })
            .catch( err => console.log(err));
        },
        delete({getters,dispatch}){
            axios({url:"/cart/buy",data: getters.cart,method:"POST"})
            .then( () => {
                dispatch("loadCart");
            })
            .catch( err => console.log(err));
        }
    },

    getters: {
      cart(state){
        return state.cart;
      }
    }
}