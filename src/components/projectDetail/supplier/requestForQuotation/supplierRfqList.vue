<template>
    <div id="piSupplierRfqList">
        <div class="container" style="margin-bottom: 60px;">
            <div class="card">
                <div class="card-body">
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                <th scope="col">No</th>
                                <th scope="col">Date</th>
                                <th scope="col">Supplier</th>
                                <th scope="col">Status</th>
                                <th scope="col">Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in supplierRfqList" :key="index++">
                                <td scope="row">{{ index }}</td>
                                <td>{{ item.date }}</td>
                                <td>{{ item.supplier }}</td>
                                <td>{{ item.status }}</td>
                                <td class="text-center"><router-link to="srfq/view/" class="nav-link">View RFQ</router-link></td>
                                </tr>
                            </tbody>
                        </table>
                        
                    <button class="btn btn-primary" style="float: right;" type="submit">Add New Supplier RFQ</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'piSupplierRfqList',
    data: function(){
        return {
            supplierRfqList : [
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