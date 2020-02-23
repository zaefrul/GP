import Vue from "vue";
import Vuex from "vuex";
import GPOpsFactory from "./gp-ops.factory";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    project: null,
    customer: null,
    metadata: null,
    metadataList: null,
    metadataPrices: null,
    suppliers: null,
    user: null,
    isLoading: false,
    success: false,
    handleError: {
      status: false,
      message: null
    },
    userData: null,
    userSettings: null,
    projectDetail: null,
  },
  getters: {
    project: state => state.project,
    customer: state => state.customer,
    suppliers: state => state.suppliers,
    metadata: state => state.metadata,
    metadatas: state => state.metadataList,
    metadataPrices: state => state.metadataPrices,
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
    },
    userDetails: state => state.userData,
    userSettings: state => state.userSettings,
    projectDetail: state => state.projectDetail
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
    },
    setUserData: (state, payload) => {
      state.userData = payload;
    },
    setSuppliers: (state, payload) => {
      state.suppliers = payload;
    },
    setUserSettings: (state, payload) => {
      state.userSettings = payload;
    },
    setMetadatas: (state, payload) => {
      state.metadataList = payload;
    },
    setMetadataPrices: (state, payload) => {
      state.metadataPrices = payload;
    },
    setProjectDetail: (state, payload) => {
      state.projectDetail = payload;
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
    registerUser: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.registerUser(payload).then(res => {
        context.commit("setUser", res);
        context.commit("setLoading", false);
        context.commit("setSuccess", true);
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
    },
    getDashboardProjects: context => {
      context.commit("setLoading", true);
      GPOpsFactory.getDashboardProjects()
        .then(res => {
          context.commit("setLoading", false);
          context.commit("setProject", res);
        })
        .catch(err => {
          context.commit("setLoading", false);
        });
    },
    getUsers: context => {
      context.commit("setLoading", true);
      GPOpsFactory.getAllUser().then(res => {
        context.commit("setLoading", false);
        context.commit("setUserSettings", res);
        console.log(res);
      });
    },
    createProjectWithCustomer: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.createProjectWithCustomer(payload).then(res => {
        context.commit("setLoading", false);
        context.commit("setSuccess", true);
      });
    },
    getAllCustomers: context => {
      context.commit("setLoading", true);
      GPOpsFactory.getAllCustomers().then(res => {
        context.commit("setCustomer", res);
        context.commit("setLoading", false);
      });
    },
    createCustomer: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.createCustomer(payload).then(res => {
        context.commit("setLoading", false);
        context.commit("setSuccess", true);
      });
    },
    getUser: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.getUser(payload)
        .then(res => {
          context.commit("setUserData", res);
          context.commit("setLoading", false);
        })
        .catch(err => {
          context.commit("setLoading", false);
        });
    },
    getAllSuppliers: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.getAllSuppliers(payload)
        .then(res => {
          context.commit("setSuppliers", res);
          context.commit("setLoading", false);
        })
        .catch(err => {
          context.commit("setLoading", false);
        });
    },
    createSupplier: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.createSupplier(payload)
        .then(res => {
          context.commit("setLoading", false);
          context.commit("setSuccess", true);
        })
        .catch(err => {
          context.commit("setLoading", false);
        });
    },
    modifyUser: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.modifyUser(payload.id, payload).then(res => {
        context.commit("setSuccess", true);
        context.commit("setLoading", false);
      });
    },
    getMetadatas: context => {
      context.commit("setLoading", true);
      GPOpsFactory.handleMetadata()
        .metadataList()
        .then(res => {
          context.commit("setMetadatas", res);
          context.commit("setLoading", false);
        });
    },
    getMetadata: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handleMetadata()
        .metadata(payload)
        .then(res => {
          context.commit("setMetadata", res);
          context.commit("setLoading", false);
        });
    },
    getMetadataPrices: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handleMetadata()
        .metadataPrices(payload)
        .then(res => {
          context.commit("setMetadataPrices", res);
          context.commit("setLoading", false);
        });
    },
    newMetadata: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handleMetadata()
        .newMetadata(payload)
        .then(res => {
          context.commit("setSuccess", true);
          context.commit("setLoading", false);
        });
    },
    getProjectDetail: (context, payload) => {
      context.commit("setLoading", false);
      GPOpsFactory.handlerProject().getProjectDetail(payload).then(res=> {
        context.commit("setProjectDetail", res);
        context.commit("setLoading",false);
      })
    }
  }
});
