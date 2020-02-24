<template>
    <div id="piSupplierDoList">
        <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Remarks</th>
                            <th scope="col" class="text-center">Dateline</th>
                            <th scope="col" class="text-center">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in currentSupplierDO" :key="index++">
                            <td scope="row">{{ index }}</td>
                            <td>{{ item.dateCreated }}</td>
                            <td>{{ item.number }}</td>
                            <td class="text-center">{{ item.dateline }}</td>
                            <td class="text-center"><router-link :to="'sdo/view/'+item.id" class="nav-link">View DO</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <router-link :to="'/project-detail/' + this.$route.params.pid + '/sdo/add'" class="btn btn-primary ml-3" style="float: right;" tag="button">Add New DO</router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'piSupplierDoList',
    data: function(){
        return {
            supplierDoList : [
                { date: '12/01/2020', supplier: 'Concrete Malaysia Sdn. Bhd.', status: 'Accepted', option: 'View'},
                { date: '12/01/2020', supplier: 'Aris Kayu Sdn. Bhd.', status: 'Accepted', option: 'View'},
                { date: '12/01/2020', supplier: 'Kim Tiles Corp', status: 'Accepted', option: 'View'}
            ]
        }
    },
    mounted() {
        this.getLatestProjectSupplierDO(this.$route.params.pid);
    },
    computed: {
        ...mapGetters(["currentSupplierDO"])
    },
    methods: {
        ...mapActions(["getLatestProjectSupplierDO"])
    }
}
</script>

<style scoped>

</style>