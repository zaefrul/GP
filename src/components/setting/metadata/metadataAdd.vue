<template>
    <div id="metadataAdd" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center">
  <h1 class="display-4">REGISTER NEW METADATA</h1>
  <p class="lead">Register new metadata to the system</p>
</div>

        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <form @submit.prevent="onSave()" method action>
                <div class="card">
                    <div class="card-body">

                        <!--New Customer List-->
                        <div class="newForm">
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputDescription">Item Description</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        id="inputDescription" 
                                        class="form-control" 
                                        placeholder="Item Description" 
                                        v-model="partName" 
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputPartNo">Part Number</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        id="inputPartNo" 
                                        class="form-control" 
                                        placeholder="Part Number" 
                                        v-model="partNumber" 
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputModelNo">Part Position</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        id="inputPartNo" 
                                        class="form-control" 
                                        placeholder="Model Number" 
                                        v-model="partPosition" 
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputModelNo">Model Number</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        id="inputPartNo" 
                                        class="form-control" 
                                        placeholder="Model Number" 
                                        v-model="modelNumber" 
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputSerialNo">Serial Number</label></div>
                                <div class="form-group col-md-10">
                                <input 
                                    type="text" 
                                    id="inputSerialNo" 
                                    class="form-control" 
                                    placeholder="Serial Number" 
                                    v-model="serialNumber" 
                                    required
                                />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputDrawingNo">Drawing Number</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        id="inputDrawingNo" 
                                        class="form-control" 
                                        placeholder="Drawing Number" 
                                        v-model="drawingNumber" 
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputItemNo">Tag Number</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        id="inputItemNo" 
                                        class="form-control" 
                                        placeholder="Item Number" 
                                        v-model="tagNumber" 
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputItemNo">Unit of Measurement</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        id="inputItemNo" 
                                        class="form-control" 
                                        placeholder="Item Number" 
                                        v-model="unitOfMeasurement" 
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputItemNo">Revision Number</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        id="inputItemNo" 
                                        class="form-control" 
                                        placeholder="Item Number" 
                                        v-model="revision" 
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputItemNo">remarks</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        id="inputItemNo" 
                                        class="form-control" 
                                        placeholder="Item Number" 
                                        v-model="remarks" 
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputPrice">Currency</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        id="inputPrice" 
                                        class="form-control" 
                                        placeholder="currency" 
                                        v-model="currency" 
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputPrice">Price</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        id="inputPrice" 
                                        class="form-control" 
                                        placeholder="Price" 
                                        v-model="prices" 
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <router-link to="/setting/metadata" tag="button" class="btn btn-danger ml-3" style="float: right;" >Cancel</router-link>
                        <button
                            class="btn btn-primary ml-3" 
                            style="float: right;"
                            type="button"
                            @click="onSave()"
                        >
                            Save
                        </button>
                    </div>
                </div>

                
                
            </form>

        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    name: 'metadataAdd',
    data: function() {
        return {
            partName:"",
            partNumber:"",
            partPosition:"",
            serialNumber:"",
            drawingNumber:"",
            tagNumber:"",
            modelNumber:"",
            remarks:"",
            revision:"",
            unitOfMeasurement:"",
            currency:"",
            prices:""
        }
    },
    watch: {
        success(val) {
            if(val)
            {
                this.$router.push({name:"metadataList"});
            }
        }
    },
    computed: {
        ...mapGetters(["success"])
    },
    methods: {
        onSave() {
            this.newMetadata({
                "partName": this.partName,
                "partNumber": this.partNumber,
                "partPosition": this.partPosition,
                "serialNumber": this.serialNumber,
                "drawingNumber": this.drawingNumber,
                "tagNumber": this.tagNumber,
                "modelNumber": this.modelNumber,
                "remarks": this.remarks,
                "revisionNumber": this.revision,
                "unitOfMeasurement": this.unitOfMeasurement,
                "prices":[
                    {
                        "amount":this.amount,
                        "currency":this.currency
                    }
                ]
            })
        },
        ...mapActions(["newMetadata"]),
        ...mapMutations(["resetSuccess"])
    }
}
</script>

<style scoped>

</style>