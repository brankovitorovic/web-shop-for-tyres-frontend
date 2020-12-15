import axios from 'axios'

export default {
    state: {
        tyres: {},
        currentTyre: [],
        pagination: {
            page: 1,
            tyreSearch : null,
            priceFrom: null,
            priceTo: null,
            sort: null
        },
        paginationInfo: {
            page: 1,
            numberOfPages: 1
        }
    },
    mutations: {
        tyres(state, tyres){
            state.tyres = tyres;
        },
        current(state, tyre){
            state.currentTyre = tyre;
        },
        paginationSearch(state, pagination){
             state.pagination.tyreSearch = pagination;
             state.pagination.page = null;
             state.pagination.priceFrom = null;
             state.pagination.priceTo = null;
             state.pagination.sort = null;
        },
        paginationPrice(state,prices){
            state.pagination.priceFrom = prices.priceFrom;
            state.pagination.priceTo = prices.priceTo;
        },
        paginationSort(state,sort){
            state.pagination.sort = sort;
        },
        paginationPage(state, page){
            state.pagination.page = page;
        },
        paginationInfo(state, info){
            state.paginationInfo.page = info.page;
            state.paginationInfo.numberOfPages = info.numberOfPages;
        }
    },
    actions: {
        loadPopular({commit}){
            return new Promise((resolve,reject) =>{
                axios({url:'tyre/popular',method:"GET"})
                .then( (resp) => {
                    commit("tyres", resp.data);
                    resolve(resp.data);
                })
                .catch( err => reject(err));

            });
        },
        currentTyre({commit},tyre){
            commit("current",tyre);
        },
        sort({commit,getters},sort){
            
            commit("paginationSort",sort)

            axios({url: '/tyre/search',data: getters.pagination,method: "POST"})
            .then( resp => {
                commit("tyres",resp.data.content);
                commit("paginationInfo", { page : resp.data.number, numberOfPages : resp.data.totalPages })
            })
            .catch( err => console.log(err));


        },
        price({commit, getters},prices){

            commit("paginationPrice",prices);

            axios({url: '/tyre/search',data: getters.pagination,method: "POST"})
            .then( resp => {
                commit("tyres",resp.data.content);
                commit("paginationInfo", { page : resp.data.number, numberOfPages : resp.data.totalPages })
            })
            .catch( err => console.log(err));


        },
        search({commit,getters},selected){

            var data = selected.selected;

            commit("paginationSearch",data);
            
            return new Promise( (resolve, reject) => {
                axios({url: '/tyre/search',data: getters.pagination,method: "POST"})
                .then( resp => {                    
                    commit("tyres",resp.data.content);
                    commit("paginationInfo", { page : resp.data.number, numberOfPages : resp.data.totalPages })
                    resolve(resp);
                })
                .catch( err => {
                    console.log(err);
                    reject(err);
                });
            })
            
        },
        changePage({commit,getters}, page){

            commit("paginationPage",page);

            axios({url: '/tyre/search', data: getters.pagination,method: "POST"})
            .then( resp => {
                commit("tyres",resp.data.content);
                commit("paginationInfo", { page : resp.data.number, numberOfPages : resp.data.totalPages })
            })
            .catch( err => console.log(err));

        },
        reset({commit,getters}){
           
            const data = getters.pagination.tyreSearch;

            commit("paginationSearch",data);

            axios({url: '/tyre/search',data: getters.pagination,method: "POST"})
                .then( resp => {                    
                    commit("tyres",resp.data.content);
                    commit("paginationInfo", { page : resp.data.number, numberOfPages : resp.data.totalPages })
                })
                .catch( err => {
                    console.log(err);
                });
        }
    },
    getters: {
        tyres(state){
            return state.tyres;
        },
        tyre(state){
            return state.currentTyre;
        },
        pagination(state){
            return state.pagination;
        },
        paginationInfo(state){
            return state.paginationInfo;
        }
    }

}