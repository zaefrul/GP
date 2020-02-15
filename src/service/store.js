import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        project:null,
        customer:null,
        metadata:null
    },
    getters: {
        project: state => state.project,
        customer: state => state.customer,
        metadata: state => state.metadata
    },
    mutations: {
        setProject: (state, payload) => {
            state.project = payload
        },
        setCustomer: (state, payload) => {
            state.customer = payload
        },
        setMetadata: (state, payload) => {
            state.metadata = payload
        }
    },
    actions: {
        createProject: (context, payload) => {
            context.commit("setProject", payload);
        },
        createCustomer: (context, payload) => {
            context.commit("setCustomer", payload)
        },
        createMetadata: (context, payload) => {
            context.commit("setMetadata", payload)
        }
    }
});