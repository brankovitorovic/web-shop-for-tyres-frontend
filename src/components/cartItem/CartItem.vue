<template>
    <div class="cartItem">

        <div class="name" @click="showTyre">
           <h2> {{item.tyre.brand}}  {{getDimensions()}} {{item.tyre.season.toLowerCase()}} </h2>
        </div>

        <div class="price">
            <h2>
                Quantity: 
                <span class="quantity"> <span @click="sub">-</span> {{item.quantity}} <span @click="add">+</span> </span>
                Price:{{getPrice()}}$ 
                <button @click="removeItem">Remove</button> 
            </h2>
        </div>

    </div>
</template>

<script>
export default {
    name: "CartItem",
    props: ["item"],
    methods: {
        getDimensions(){
            return this.item.tyre.width + "/" + this.item.tyre.height + " R" + this.item.tyre.diameter;
        },
        add(){
            this.item.quantity++;
        },
        sub(){
            if(this.item.quantity < 2){
                return;
            }
            this.item.quantity--;
        },
        getPrice(){
            return this.item.quantity * this.item.tyre.price;
        },
        removeItem(){
            this.$store.dispatch("removeItem", this.item);
        },
        showTyre(){
            this.$store.dispatch("currentTyre",this.item.tyre);
            this.$router.push("/Details");
        }
    }   
}
</script>

<style scoped>


.cartItem {
    display: flex;
    justify-content: space-between;
    margin: 0px 60px;
}

.name {
    float: left;
    text-align: left;
    width: 40%;
    cursor: pointer;
}

.price{
    float: right;
    width: 60%;
    text-align: right;
}

span {
    cursor: pointer;
    margin: 20px;
}

button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: red;
    color: white;
    font-size: large;
    font-weight: 300;
    border: 1px solid #333333;
    border-radius: 10px;
    cursor: pointer;
}

.quantity {
    background-color:  rgba(256, 256, 256,0.7);
}

</style>