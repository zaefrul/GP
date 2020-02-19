import Vue from "vue";
import Vuex from "vuex";
import GPOpsFactory from "./gp-ops.factory";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    project: null,
    customer: null,
    metadata: null,
    user: null,
    isLoading: false,
    success: false,
    handleError: {
      status: false,
      message: null
    }
  },
  getters: {
    project: state => state.project,
    customer: state => state.customer,
    metadata: state => state.metadata,
    user: state => state.user,
    isLoading: state => state.isLoading,
    success: state => state.success,
    error: state => state.error,
    getLatestProjects: state => {
      const { project } = state;
      if (project) {
        return project.filter((pro, i) => i < 5);
      }

      return null;
    }
  },
  mutations: {
    setProject: (state, payload) => {
      state.project = payload;
    },
    setCustomer: (state, payload) => {
      state.customer = payload;
    },
    setMetadata: (state, payload) => {
      state.metadata = payload;
    },
    setUser: (state, payload) => {
      state.user = payload;
    },
    setLoading: (state, payload) => {
      state.isLoading = payload;
    },
    setSuccess: (state, payload) => {
      state.success = payload;
    },
    setError: (state, payload) => {
      state.error = payload;
    },
    resetSucess: state => {
      state.success = false;
    }
  },
  actions: {
    createProject: (context, payload) => {
      context.commit("setProject", payload);
    },
    createCustomer: (context, payload) => {
      context.commit("setCustomer", payload);
    },
    createMetadata: (context, payload) => {
      context.commit("setMetadata", payload);
    },
    handleLogin: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handleLogin(payload)
        .then(res => {
          context.commit("setUser", res);
          context.commit("setLoading", false);
          context.commit("setSuccess", true);
        })
        .catch(err => {
          context.commit("setLoading", false);
          context.commit("setError", {
            status: true,
            errorMessage: "Invalid login"
          });
        });
    },
    initializeUserData: context => {
      const user = GPOpsFactory.getUserDetails();
      context.commit("setUser", user);
    },
    handleLogout: context => {
      GPOpsFactory.customerLogout();
      context.commit("setUser", null);
    },
    getAllProjects: context => {
      context.commit("setLoading", true);
      GPOpsFactory.getAllProjects()
        .then(res => {
          context.commit("setLoading", false);
          context.commit("setProject", res);
        })
        .catch(err => {
          context.commit("setLoading", false);
        });
    }
  }
});
