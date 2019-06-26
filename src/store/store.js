import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        // responseAPI: {
        //     "name": "Abhigyan Nayak",
        //     "email": "abhigyan.nayak@gmail.com",
        //     "city_id": 21,
        //     "user_type": ["ASV"],
        //     "group_id": 10,
        //     "user_id": 1,
        //     "title": "MeshApp",
        //     "apps": [
        //         {
        //             "name": "Donut new",                    
        //             "link": "http://www.makeadiff.in/apps/donut",
        //             "icon": "https://image.freepik.com/free-vector/donut_53876-25491.jpg",
        //             "description": "some new text some lorum epsum text some lorum epsum text some lorum epsum text some lorum epsum text",
        //             "apps": [
        //                 {
        //                     "name": "reimbursement",
        //                     "link": "http://www.makeadiff.in/apps/tunod",
        //                     "icon": "http://https://image.freepik.com/free-vector/money-vector-design-illustration_69130-27.jpg.makeadiff.in/icon2",
        //                     "description": "some lorum epsum text",
        //                     "title": "finance",
        //                     "apps": []                    
        //                 },  
        //                 {   
        //                     "name": "Salesforce",
        //                     "link": "http://www.makeadiff.in/apps/tunod",
        //                     "icon": "http://www.makeadiff.in/icon2",
        //                     "description": "some lorum epsum text some lorum epsum textsome lorum epsum textsome lorum epsum text",
        //                     "title": "finance",
        //                     "apps": []
        //                 }
        //             ]
        //         },
        //         {
        //             "name": "tunod",
        //             "link": "http://www.makeadiff.in/apps/tunod",
        //             "icon": "https://image.freepik.com/free-vector/economic-growth_24877-49242.jpg",
        //             "description": "some lorum epsum text",
        //             "apps": [
                        
        //             ]     
        //         },
        //         {
        //             "name": "finance",
        //             "link": "finance",
        //             "icon": "https://image.freepik.com/free-vector/team-investment-management-discuss-together-growth-increase-business-vector-illustration_25147-9.jpg",
        //             "description": "some lorum epsum text",
        //             "apps": [
        //                 {
        //                     "name": "reimbursement",
        //                     "link": "http://www.makeadiff.in/apps/tunod",
        //                     "icon": "http://www.makeadiff.in/icon2",
        //                     "description": "some lorum epsum text",
        //                     "title": "finance",
        //                     "apps": []
                      
        //                 },  
        //                 {
        //                     "name": "Salesforce",
        //                     "link": "http://www.makeadiff.in/apps/tunod",
        //                     "icon": "http://www.makeadiff.in/icon2",
        //                     "description": "some lorum epsum text",
        //                     "title": "finance",
        //                     "apps": []
        //                 }
        //             ]
        //         }        
        //     ]    
        // },
        userData: {

        },
        appsData: [],
        userId: 1        
    },
    mutations: {
        storeUserData(state, data) {
            state.userData = data
        },
        storeAppsData(state, data) {
            state.appsData = data;
        },
        storeUserId(state, data) {
            state.userId = data;
        }

    },
    getters: {
        responseAPI: state => {
            return state.responseAPI    
        },
        userData: state => {
            return state.userData
        },
        appsData: state => {
            return state.appsData
        },   
        userId: state => {
            return state.userId
        } 
    },
    actions: {
        getUserData(context)  {
            return new Promise((resolve, reject) => {
                axios.get('http://makeadiff.in/api/v1/users/'+this.state.userId, {
                    headers: {
                        'Content-Type': 'application/json'               
                    },
                    auth: {
                        username: 'data.simulation@makeadiff.in',
                        password: 'pass'
                    }    
                }).
                then(response => {
                    context.commit('storeUserData', response.data.data.users)                    
                    resolve(response);  // Let the calling function know that http is done. You may send some data back
                }).catch(error => {
                    reject(error);
                })        
            })
        },
        getAppsData(context) {
            return new Promise((resolve, reject) => {
                axios.get('http://localhost/phoenix/index.php/v1/menu', {
                    headers: {
                        'Content-Type': 'application/json'               
                    },
                    auth: {
                        username: 'data.simulation@makeadiff.in',
                        password: 'pass'
                    }    
                }).
                then(response => {
                    context.commit('storeAppsData', response.data.data.menu)                    
                    resolve(response);  // Let the calling function know that http is done. You may send some data back
                }).catch(error => {
                    reject(error);
                })        
            })
        },
        getUserId(context, data) {
            context.commit('storeUserId', data)
        }                    
    }    
})