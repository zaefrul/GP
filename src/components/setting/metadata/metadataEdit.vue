<template>
    <div id="metadataEdit" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center">
  <h1 class="display-4">EDIT METADATA</h1>
</div>

        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <form @submit.prevent="onEdit()" action method>

                <div class="card">
                    <div class="card-body">

                        <!--New Customer List-->
                        <div class="newForm">
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputDescription">Part Name</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputDescription" class="form-control" placeholder="Item Description" v-model="metadata.partName" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputPartNo">Part Number</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputPartNo" class="form-control" placeholder="Part Number" v-model="metadata.partNumber" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputPartNo">Part Position</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputPartNo" class="form-control" placeholder="Part Number" v-model="metadata.partPosition" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputModelNo">Model Number</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputPartNo" class="form-control" placeholder="Model Number" v-model="metadata.modelNumber" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputSerialNo">Serial Number</label></div>
                                <div class="form-group col-md-10">
                                <input type="text" id="inputSerialNo" class="form-control" placeholder="Serial Number" v-model="metadata.serialNumber" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputDrawingNo">Drawing Number</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputDrawingNo" class="form-control" placeholder="Drawing Number" v-model="metadata.drawingNumber" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputItemNo">Tag Number</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputItemNo" class="form-control" placeholder="Tag Number" v-model="metadata.tagNumber" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputItemNo">Revision Number</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputItemNo" class="form-control" placeholder="Revision Number" v-model="metadata.revision" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputItemNo">Unit of Measurement</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputItemNo" class="form-control" placeholder="Unit of Measurement" v-model="metadata.unitOfMeasurement" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputItemNo">Remarks</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputItemNo" class="form-control" placeholder="Item Number" v-model="metadata.remarks" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputPrice">Price</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputPrice" class="form-control" placeholder="Price" v-model="inputPrice" required>
                                </div>
                            </div>
                        </div>

                        <router-link to="/setting/metadata" tag="button" class="btn btn-danger ml-3" style="float: right;" >Back</router-link>
                        <!-- <router-link to="/setting/metadata" tag="button" class="btn btn-primary ml-3" style="float: right;" >Save</router-link> -->
                        <button type="button" @click="onEdit()" class="btn btn-primary ml-3" style="float: right;">Save</button>
                    </div>
                </div>

                
                
            </form>

        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'metadataEdit',
    data: function() {
        return {
            inputPrice:""
        }
    },
    watch: {
        success(val) {
            this.$router.push({name:"metadataList"})
        }
    },
    mounted() {
        this.getMetadata(this.$route.params.mid)
    },
    computed: {
        ...mapGetters(["metadata","success"])
    },
    methods: {
        ...mapActions(["getMetadata","editMetadata"]),
        onEdit() {
            this.editMetadata(
                this.metadata
            );
        }
    }
}
</script>

<style scoped>

</style>