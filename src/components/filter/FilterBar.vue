<template>
    <div class="bar">
        <div class="filterBar">
            <h2 class="title">Filters</h2>

            <div class="optionals">
            <!-- fali v-model svuda naravno -->
                <div class="priceRange"> 

                    <label for="price">Price range from:</label>
                    <input type="number">

                    <label for="price">to:</label>
                    <input type="number">
                    <button>Apply</button>
                    
                    <button class="redText">Reset price</button>

                </div> 

                <div class="sortBy">
                    <label for="sort">Sort by:</label>
                    <select @change="sortBy" v-model="selectedSort">
                        <option disabled value="">Price or Name</option>
                        <option v-for="sort in sorts" v-bind:key="sort" value=""> {{sort}}</option>
                    </select>

                </div>

                

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "FilterBar",
    data(){
        return {
            sorts: ["Price ascending","Price descending", "Name ascending", "Name descending"],
            selectedSort: ""
        
        }
    },
    methods: {
        sortBy(){ // ovo radi 
            console.log(this.selectedSort);
        }
    }
}
</script>

<style scoped>

.bar {
    width: 85%;
    margin: auto;
    background-color: white;
    border-radius: 10px;

}

.filterBar {
    background-color: rgba(255, 127, 80, 0.5);
    width: 100%;
    text-align: center;
    border-radius: 10px;
    padding-bottom: 30px;
    margin-bottom: 50px;
}

.filterBar .optionals {
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: auto;
}

.title {
    padding-top: 20px;
    font-size: xx-large;
    font-weight: normal;
}

select {
    height: 20px;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    border: 1px solid black;
}

label {
    font-size: x-large;
}

.priceRange label {
    margin: 10px;
}

.priceRange button {
    padding: 5px 15px;
    background-color: rgba(7, 188, 253,0.5);
    color: #333333;
    font-weight: 300;
    border: 1px solid #333333;
    border-radius: 10px;
    cursor: pointer;
    margin: 0px 20px;
}

.sortBy label {
    margin-right: 10px;
}

input {
    border-radius: 10px;
    outline: none;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
    border: 1px solid black;
    width: 70px;
    height: 22px;
}

.priceRange .redText {
    margin-left: 10px;
    color: red;
}

</style>