<template>
    <div id="piSupplierPoList">
        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Remarks</th>
                            <th scope="col" class="text-center">PO Status</th>
                            <th scope="col" class="text-center">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in supplierPoList" :key="index++">
                            <td scope="row">{{ index }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.supplier }}</td>
                            <td class="text-center">{{ item.status }}</td>
                            <td class="text-center"><router-link to="spo/view/" class="nav-link">View PO</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <router-link :to="'/project-detail/' + this.$route.params.pid + '/spo/add'" class="btn btn-primary ml-3" style="float: right;" tag="button">Add New PO</router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'piSupplierPoList',
    data: function(){
        return {
            supplierPoList : [
                { date: '12/01/2020', supplier: 'Concrete Malaysia Sdn. Bhd.', status: 'Accepted', option: 'View'},
                { date: '12/01/2020', supplier: 'Aris Kayu Sdn. Bhd.', status: 'Accepted', option: 'View'},
                { date: '12/01/2020', supplier: 'Kim Tiles Corp', status: 'Accepted', option: 'View'}
            ]
        }
    }
}
</script>

<style scoped>

</style>