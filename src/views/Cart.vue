<template>
    <div class="cart">
        <div class="cartItems">
            <h1>Cart</h1>
            <div>
                <CartItem v-for="item in cart" :key="item.tyre.frontID" v-bind:item="item" ></CartItem>
            </div>
            <div class="total">
                <h2> Total price: {{totalPrice()}}$</h2>
                <button @click="removeAll">Buy</button>
            </div>

            <div class="removeAll">
                <button @click="removeAll">Remove all</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from '../components/cartItem/CartItem.vue'

export default {
    name: "Cart",
    created() {
        this.$store.dispatch("loadCart");
    },
    components: {
        CartItem
    },
    computed: {
        ...mapGetters([
            'cart'
        ])
    },
    methods: {
        totalPrice(){
            var total = 0;
            this.cart.forEach(item => {
                total += item.quantity * item.tyre.price;
            });
            return total;
        },
        removeAll(){
            this.$store.dispatch("delete");
        }
    }
}
</script>

<style scoped>

.cart {
  width: 85%;
  margin: auto;
  background-color: white;
  border-radius: 10px;
}

.cartItems {
  background-color: rgba(255, 127, 80, 0.5);
  width: 100%;
  border-radius: 10px;
  text-align: center;
}

h1 {
    padding-top: 20px;
}

.total > button {
    margin-bottom: 20px;
    padding: 20px 30px;
    background-color: rgba(7, 188, 253,0.5);
    font-size: large;
    color: #333333;
    font-weight: 700;
    border: 1px solid #333333;
    border-radius: 10px;
    cursor: pointer;
}

.removeAll > button {
    margin: 10px 0px 20px 10px;
    padding: 5px 5px;
    background-color: red;
    color: white;
    font-size: large;
    font-weight: 300;
    border: 1px solid #333333;
    border-radius: 10px;
    cursor: pointer;
}

</style>