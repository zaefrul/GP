<template>
    <div id="piCustomerDoList">
        <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Remarks</th>
                            <th scope="col" class="text-center">DO Status</th>
                            <th scope="col" class="text-center">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in supplierDoList" :key="index++">
                            <td scope="row">{{ index }}</td>
                            <td>{{ item.dateCreated }}</td>
                            <td>{{ item.number }}</td>
                            <td class="text-center">{{ item.dateline }}</td>
                            <td class="text-center"><router-link to="cdo/view/" class="nav-link">View DO</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <router-link :to="'/project-detail/' + this.$route.params.pid + '/cdo/add'" class="btn btn-primary ml-3" style="float: right;" tag="button">Add New DO</router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'piCustomerDoList',
    data: function(){
        return {
            
        }
    },
    mounted() {
        this.getLatestProjectCustomerDO(this.$route.params.pid);
    },
    computed: {
        ...mapGetters(["supplierDoList"])
    },
    methods: {
        ...mapActions(["getLatestProjectCustomerDO"])
    }
}
</script>

<style scoped>

</style>