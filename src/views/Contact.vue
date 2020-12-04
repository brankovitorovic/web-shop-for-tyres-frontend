<template>
    <div class="con">
        <div class="contact">
            <h2>Feel free to contact us if you have any question</h2>

            <div class="name">
                <h3 for="name">Name</h3> <input type="text" v-model="name" placeholder="(optional)">
            </div>

            <div class="surname"> 
                <h3 for="surname">Surname</h3> <input type="text" v-model="surname" placeholder="(optional)">
            </div>

            <div class="email">
                <h3>Email</h3> <input type="email" v-model="email" placeholder="Enter your email">
            </div>

            <h3 for="text">Text</h3>
            <div class="text">
                <textarea cols="50" rows="10" v-model="text"></textarea>
            </div>

            <div class="submit">
                <button @click="submit">Send email</button>
            </div>

        </div>
</div>
</template>

<script>
export default {
    name: "Contact",
    data(){
        return {
            name: '',
            surname: '',
            email: '',
            text: ''
        }
    },
    methods: {
        submit(){
            console.log(this.name + " " + this.surname + ", " + this.email + ", " + this.text);
        }
    }    
}
</script>

<style scoped>

.con {
    background-color: white;
    width: 85%;
    margin: auto;
    border-radius: 10px;
}

.contact {
    background-color: rgba(255, 127, 80, 0.5);
    width: 100%;
    margin: auto;
    text-align: center;
    margin-bottom: 50px;
    border-radius: 10px;

}

h2 {
    padding-top: 30px;
}

h3 {
    margin-top: 25px;
    margin-bottom: 5px;
}

.name {
    width: 80%;
    margin: auto;
    text-align: center;
}

.surname {
    width: 80%;
    margin: auto;
    text-align: center;
}

.email {
    width: 80%;
    margin: auto;
    text-align: center;
}

.email > input {
    width: max-content;
}


.text {
    width: 100%;
}

button {
    margin-top: 25px;
    margin-bottom: 20px;
    padding: 10px 20px;
    background-color: rgba(7, 188, 253,0.5);
    font-size: large;
    color: #333333;
    font-weight: 300;
    border: 1px solid #333333;
    border-radius: 10px;
    cursor: pointer;

}

</style>