<template>
    <div @click="showTyre(tyre)" class="card">
        <img src="https://www.goodyear.co.in/wp-content/uploads/Goodyear_0000_01.-Assurance.png" alt="tyre picture">
        <h1>{{tyre.brand}}</h1> 
        <h4>{{tyre.name}}</h4>

        <h3>Size: {{tyre.width}}/{{tyre.height}} R{{tyre.diameter}}</h3>

        <h3>Season: {{tyre.season}}</h3>

        <h1>Price: <label class="price">{{tyre.price}}$ </label></h1>
        
        <button @click="showTyre(tyre)">Details</button>
   
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["tyre"],
    methods: {
        showTyre(tyre){
            this.$store.dispatch('currentTyre',tyre);
            if(this.$route.name != "Details"){
                this.$router.push("/Details");
            }else {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        },
        
    },
   
    

}
</script>

<style scoped>

.card {
    width: 23%;
    display: inline-block;
    background-color: rgba(168, 159, 155, 0.8);
    text-align: center;
    margin: 10px;
    color: black;
    border-radius: 10px;
    
}

.card:hover {
    background-color: rgba(212, 200, 195, 0.9);
    cursor: pointer;
}

img {
    height: 140px;
}


.price {
    color: rgb(255, 0, 0);
}


button {
    margin-bottom: 20px;
    padding: 10px 20px 10px 20px;
    background-color: rgba(7, 188, 253,0.5);
    font-size: large;
    color: #333333;
    font-weight: 300;
    border: 1px solid #333333;
    border-radius: 10px;
    cursor: pointer;
}

button:hover {
        background-color: rgba(7, 188, 253,1);
}


</style>