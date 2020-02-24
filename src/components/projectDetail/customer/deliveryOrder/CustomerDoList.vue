<template>
    <div id="piCustomerDoList">
        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
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
                            <td>{{ item.date }}</td>
                            <td>{{ item.supplier }}</td>
                            <td class="text-center">{{ item.status }}</td>
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
export default {
    name: 'piCustomerDoList',
    data: function(){
        return {
            supplierDoList : [
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