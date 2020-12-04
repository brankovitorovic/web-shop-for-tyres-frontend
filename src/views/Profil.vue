<template>
    <div class="profil">
        <div class="colored">

        <h1>Profil</h1>
            
        <div v-if="successfullyChanged">
            <label for="change" class="red">Successfully updated profile!</label>
        </div>
        
            <div class="center">
                
                
                <label for="name">Username</label>
                <input type="text" v-model="user.username">
                
                <br>

                <label for="name">Name</label>
                <input type="text" v-model="user.name">

                <br>

                <label for="email">Email</label>
                <input type="text" v-model="user.email">

                <br>

                <label for="password">Password</label>
                <input id="password" type="text" placeholder="New password..">
            </div>
                <br>
                <button @click="saveUser">Save changes</button>

            <div class="deleteProfil">
                <h4>Do not need account any more ?</h4>
                <button @click="deleteProfil">Delete</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Profil",
    created: 
        function () {
            this.$store.dispatch('loadUser')
            .then( () => this.user = this.$store.getters.user)
            .catch(err => console.log(err));
    },
    data(){
        return {
            user: {
                username: '',
                password: '',
                email: '',
                name: ''
            },
            successfullyChanged: false
        }
    },
    methods: {
        saveUser(){
            const password = document.getElementById("password").value;
            
            if(password != ''){
                this.user.password = password;
            }

            this.$store.dispatch('saveUser', this.user)
            .then(() => this.successfullyChanged = true)
            .catch(err => {
                if(err.response.status == 400){
                    alert("Username is already taken!");
                }
            });
        },
        deleteProfil(){
            this.$store.dispatch('deleteProfil')
            .then( () => this.$router.push("/"))
            .catch( err => console.log(err))
        }
    }
}
</script>

<style scoped>

.profil {
  width: 85%;
  margin: auto;
  background-color: white;
  border-radius: 10px;
}

.colored {
  background-color: rgba(255, 127, 80, 0.5);
  width: 100%;
  border-radius: 10px;
  text-align: center;
}

h1 {
    padding: 20px;
}

.red {
    color:red;
}

input {
    margin: 20px;
}

button {
    margin: 15px 0px 40px 0px;
    padding: 10px 20px 10px 20px;
    background-color: rgba(7, 188, 253,0.5);
    font-size: large;
    color: #333333;
    font-weight: 300;
    border: 1px solid #333333;
    border-radius: 10px;
    cursor: pointer;
}

.center {
    width: fit-content;
    margin: auto;
    text-align: right;
}

.deleteProfil > button {
    margin: 0px 0px 40px 0px;
    padding: 5px 10px;
    background-color: red;
    color: white;
    font-size: large;
    font-weight: 300;
    border: 1px solid #333333;
    border-radius: 10px;
    cursor: pointer;
}

</style>