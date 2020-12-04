<template>
    <div class="signIn">
        <div class="form left">
            <form @submit.prevent="login">
                <h1>Sign In</h1>
                <label>Username</label>
                <input required v-model="username" type="text" placeholder="Username"/>
                <br>
                <label>Password</label>
                <input required v-model="password" type="password" placeholder="Password"/>
                <br>
                <label class="red" v-if="faildLog">Wrong username or password</label>
                <br>
                <button type="submit">Login</button>
            </form>
            <h3>Still not a member ? Register fast and easy ==></h3>
        </div>

        <div class="right">
            <form @submit.prevent="register">
                <h1>Sign Up</h1>

                <div class="align">
                    
                    <label>Name</label>
                    <input required v-model="name" type="text" placeholder="Name..."/>
                    
                    <br>
                    <label>Username</label>
                    <input required v-model="usernameRegister" type="text" placeholder="Username"/>
                    <br>
                    <label>Email</label>
                    <input required v-model="email" type="email" placeholder="Email..."/>
                    <br>
                    <label>Password</label>
                    <input required v-model="passwordRegister" type="password" placeholder="Password"/>
                    <br>
                    
                </div>

                <button type="submit">Register</button>   
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignIn",
    data(){
      return {
        username : "",
        password : "",
        usernameRegister: "",
        passwordRegister: "",
        name: "",
        email: "",
        faildLog: false
      }
    },methods: {
      login() {
        this.$store.dispatch('login', { username: this.username, password: this.password })
        .then(() => this.$router.push('/'))
        .catch(err => {
            if(err.response.status == 403){
                this.faildLog = true;
            }
        })
      },
      register(){
        this.$store.dispatch('register',{username: this.usernameRegister, password: this.passwordRegister, name: this.name, email: this.email})
        .then( () =>  this.$router.push('/'))
        .catch(err => {
            console.log(err);
        })
      }
    }
}
</script>

<style scoped>

.signIn {
    width: 85%;
    margin: auto;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
}

.form {
    width: 50%;
    float: left;    
    background-color: rgba(255, 127, 80, 0.5);
    text-align: center;
    border-radius: 10px 0 0 10px;
    border-right: 2px dotted black;
}

.right {
    width: 50%;
    float: right;
    background-color: rgba(255, 127, 80, 0.5);
    text-align: center;
    border-radius: 0 10px 10px 0;
    text-align: center;
}

input {
    margin: 20px 5px;
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

h1 {

    padding-top: 20px;
}

a{
    text-decoration: none;
    color: blue;
}

.align {
    width: fit-content;
    margin: auto;
    text-align: right;
}

.red {
    color: red;
}

</style>