<template>
    <div id="piSupplierPoView">
        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Remarks</th>
                            <th scope="col">PO Status</th>
                            <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in supplierPoList" :key="index++">
                            <td scope="row">{{ index }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.supplier }}</td>
                            <td>{{ item.status }}</td>
                            <td>{{ item.option }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn btn-primary" style="float: right;" type="submit">Add New PO</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'piSupplierPoView',
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