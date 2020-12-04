import jwtDecoder from "jwt-decode";
import axios from 'axios' 
// npm install axios
// npm install jwt-decode 

axios.defaults.baseURL = 'http://localhost:8080'

function getUsernameFromToken(token){
    if(token == ''){
      return '';
    } 
    return jwtDecoder(token).sub;
  }

function updateToken(token){
    localStorage.setItem("token",token);
    axios.defaults.headers.common['Authorization'] = token;
}

export default {
    state:{
        token: '',
        username :  ''
    },

    mutations: {
        auth_success(state, token){ 
            state.token = token;
            state.username = getUsernameFromToken(token);
            updateToken(token);
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.status = ''
            state.token = ''
            state.username = ''
        },
    },

    actions: {
        login({commit}, user){
            return new Promise((resolve, reject) => {
            axios({url: '/login', data: user, method: 'POST' })
            .then(resp => {
                const token = resp.headers['authorization'];
                commit('auth_success', token);
                resolve(resp)
            })
            .catch(err => {
                commit('auth_error')
                reject(err)
            })
            })
        },
        register({commit}, user){
        return new Promise((resolve, reject) => {
            axios({url: '/user/save', data: user, method: 'POST' })
            .then(resp => {
            const token = resp.data;
            commit('auth_success', token);
            resolve(resp)
            })
            .catch(err => {
            commit('auth_error', err)
            reject(err)
            })
        })
        },
        logout({commit}){
        return new Promise((resolve) => {
            commit('logout');
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
            resolve();
        })
        },
        checkLoggedUser({commit}){
            const token = localStorage.getItem('token');
            if(token == null){
                return;
            }
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success',token);
        }
    },

    getters: {
        isLoggedIn(state){
            return state.token != '';
        },
        username(state){
            return state.username;
        } 
    }
}