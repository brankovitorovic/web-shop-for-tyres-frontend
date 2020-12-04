<template>
    <div>
        <div class="background">
            <div class="details">
                
                <div class="tyre">
                    <div class="image">
                        <img src="https://www.goodyear.co.in/wp-content/uploads/Goodyear_0000_01.-Assurance.png" alt="tyres picture">
                    </div>

                    <div class="info">
                        <h1>{{tyre.brand}}</h1>
                        <h3>{{tyre.name}}</h3>
                        <h2>Size: {{tyre.width}}/{{tyre.height}} R{{tyre.diameter}}</h2>

                        <div>
                            <span class="counter">
                                <span class="sub" @click="sub">-</span>
                                <span type="number" class="number">{{counter}}</span>
                                <span class="add" @click="add">+</span> 
                            </span>
                            
                            <span>
                                Price: <span class="sum">{{counter * tyre.price}}$</span>
                            </span>

                        </div>

                    <button @click="addToCart" :disabled="! isLogged">Add to cart</button> <!-- proveri ako nije ulogovan stavi ovde da je disabled recimo -->
                    <h3 v-if="! isLogged">Please <router-link class="signUp" to="/signIn">sign in</router-link> to be able to add to cart.</h3>

                    </div>

                </div>

            </div>
        </div>

        <div class="similar">  
                <h1>Similar tyres</h1>
                <Resault-cards></Resault-cards>
        </div>
    </div>
</template>

<script>
import ResaultCards from '../components/resault-cards/ResaultCards.vue';

export default {
    name: "Details",
    computed: {
        isLogged(){
            return this.$store.getters.isLoggedIn;
        },
    },
    props: ["tyre"],
    data(){
        return {
            counter: 1
        }
    },
    components: {
        ResaultCards
    },
    methods: {
        addToCart(){
            console.log("Add to cart!");
        },
        add(){
            this.counter++;
        },
        sub(){
            if(this.counter < 2){
                return;
            }
            this.counter--;
        }
    }
}
</script>

<style scoped>

div {
    text-align: center;
}

.background {
    width: 85%;
    margin: auto;
    background-color: white;
    border-radius: 10px;

}

.details {
    width: 100%;
    background-color: rgba(255, 127, 80, 0.5);
    border-radius: 10px;
}

.similar {
    width: 90%;
    margin: auto;
}

.tyre {
    display: flex;
    justify-content: space-between;
}

.image {
    float: left;
}

.info {
    float: right;
    width: 100%;
    height: 500px;
    text-align: center;
}

.tyre img {
    height: 500px;
}

span {
    font-size: xx-large;
    margin: 0 15px;
    outline: none;
}

.counter {
    background-color:  rgba(256, 256, 256,0.7);
}

h1 {
    margin-top: 100px;

}

.similar > h1 {
    color: white;
}

.add, .sub {
    cursor: pointer;
}

button {
    margin-top: 30px;
    padding: 15px 25px;
    background-color: rgba(7, 188, 253,0.5);
    font-size: large;
    color: #333333;
    font-weight: 300;
    border: 1px solid #333333;
    border-radius: 10px;
    cursor: pointer;
}

button:hover {
    background-color: rgba(7, 188, 253,0.7);

}

button:disabled {
        background-color: rgba(7, 188, 253,0.2);
        cursor: auto;
}

.sum {
    color: blue;
}

::selection {
    background: transparent;
}

.signUp {
    text-decoration: none;
    color: blue;
}

</style>