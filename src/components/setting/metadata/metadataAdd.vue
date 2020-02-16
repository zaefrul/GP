<template>
    <div id="metadataAdd" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center">
  <h1 class="display-4">REGISTER NEW METADATA</h1>
  <p class="lead">Register new metadata to the system</p>
</div>

        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <form action="">

                <div class="card">
                    <div class="card-body">

                        <!--New Customer List-->
                        <div class="newForm">
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputDescription">Item Description</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputDescription" class="form-control" placeholder="Item Description" v-model="inputDescription" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputPartNo">Part Number</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputPartNo" class="form-control" placeholder="Part Number" v-model="inputPartNo" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputModelNo">Model Number</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputPartNo" class="form-control" placeholder="Model Number" v-model="inputModelNo" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputSerialNo">Serial Number</label></div>
                                <div class="form-group col-md-10">
                                <input type="text" id="inputSerialNo" class="form-control" placeholder="Serial Number" v-model="inpinputSerialNoutPartNo" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputDrawingNo">Drawing Number</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputDrawingNo" class="form-control" placeholder="Drawing Number" v-model="inputDrawingNo" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputItemNo">Item Number</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputItemNo" class="form-control" placeholder="Item Number" v-model="inputItemNo" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputPrice">Price</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputPrice" class="form-control" placeholder="Price" v-model="inputPrice" required>
                                </div>
                            </div>
                        </div>

                        <router-link to="/setting/metadata" tag="button" class="btn btn-danger ml-3" style="float: right;" >Cancel</router-link>
                        <router-link to="/setting/metadata" tag="button" class="btn btn-primary ml-3" style="float: right;" >Save</router-link>
                        
                    </div>
                </div>

                
                
            </form>

        </div>
    </div>
</template>

<script>
export default {
    name: 'metadataAdd'
}
</script>

<style scoped>

</style>