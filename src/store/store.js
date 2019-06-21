import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        responseAPI: {
            "name": "Abhigyan Nayak",
            "email": "abhigyan.nayak@gmail.com",
            "city_id": 21,
            "user_type": ["ASV"],
            "group_id": 10,
            "user_id": 1,
            "title": "MeshApp",
            "apps": [
                {
                    "name": "Donut",                    
                    "link": "http://www.makeadiff.in/apps/donut",
                    "icon": "https://makeadiff.in/madapp/images/flat_ui/donut.png",
                    "description": "some lorum epsum text",
                    "apps": []
                },
                {
                    "name": "tunod",
                    "link": "http://www.makeadiff.in/apps/tunod",
                    "icon": "http://www.makeadiff.in/icon2",
                    "description": "some lorum epsum text",
                    "apps": []     
                },
                {
                    "name": "finance",
                    "link": "finance",
                    "icon": "http://www.makeadiff.in/icon3",
                    "description": "some lorum epsum text",
                    "apps": [
                        {
                            "name": "reimbursement",
                            "link": "http://www.makeadiff.in/apps/tunod",
                            "icon": "http://www.makeadiff.in/icon2",
                            "description": "some lorum epsum text",
                            "title": "finance",
                            "apps": []
                      
                        },  
                        {
                            "name": "Salesforce",
                            "link": "http://www.makeadiff.in/apps/tunod",
                            "icon": "http://www.makeadiff.in/icon2",
                            "description": "some lorum epsum text",
                            "title": "finance",
                            "apps": []
                        }
                    ]
                }        
            ]    
        },
        userData: {

        }        
    },
    mutations: {
        storeUserData(state, data) {
            state.userData = data
        }
    },
    getters: {
        responseAPI: state => {
            return state.responseAPI    
        },
        userData: state => {
            return state.userData
        }    
    },
    actions: {
        getUserData(context)  {
            return new Promise((resolve, reject) => {
                axios.get('http://makeadiff.in/api/v1/users/1', {
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
                    // console.log(response.data.data.users)
                    resolve(response);  // Let the calling function know that http is done. You may send some data back
                }).catch(error => {
                    reject(error);
                })        
            })
        }            
    }    
})