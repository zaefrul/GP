<template>
    <div id="piSupplierQuotationList">
        <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Referrence</th>
                            <th scope="col">Quotation Status</th>
                            <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in currentSupplierQuotation" :key="index++">
                            <td scope="row">{{ index }}</td>
                            <td>{{ item.dateCreated }}</td>
                            <td>{{ item.number }}</td>
                            <td>{{ item.status }}</td>
                            <td class="text-center"><router-link :to="'sq/view/' + item.id" class="nav-link">View Quotation</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn btn-primary" style="float: right;" @click="$router.push({name:'supplierQuotation'})" type="button">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'piSupplierQuotationList',
    data: function(){
        return {
            supplierQuotationList : [
                { date: '12/01/2020', supplier: 'Concrete Malaysia Sdn. Bhd.', status: 'Rejected', option: 'View'},
                { date: '12/01/2020', supplier: 'Aris Kayu Sdn. Bhd.', status: 'Rejected', option: 'View'},
                { date: '12/01/2020', supplier: 'Kim Tiles Sdn. Bhd.', status: 'Accepted', option: 'View'}
            ]
        }
    },
    mounted() {
        this.getProjectSupplierQuotation(this.$route.params.pid);
    },
    computed: {
        ...mapGetters(["currentSupplierQuotation"])
    },
    methods: {
        ...mapActions(["getProjectSupplierQuotation"])
    }
}
</script>

<style scoped>

</style>