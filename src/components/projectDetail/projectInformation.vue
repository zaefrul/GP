<template>
    <div id="piMain" class="content-margin-top">
        <div class="progressBar mb-5 mt-5">
            <div class="progressRow">
                <div class="progressBlock">
                    <div class="progressTitle">Supplier RFQ</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': stageStatus >= 1 }">
                        <div class="level">1</div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Customer Quotation</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': stageStatus >= 2 }">
                        <div class="level">2</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': stageStatus >= 2 }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Supplier Quotation</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': stageStatus >= 3 }">
                        <div class="level">3</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': stageStatus >= 3 }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Customer Purchase Order</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': stageStatus >= 4 }">
                        <div class="level">4</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': stageStatus >= 4 }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Supplier Purchase Order</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': stageStatus >= 5 }">
                        <div class="level">5</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': stageStatus >= 5 }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Supplier SOA</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': stageStatus >= 6 }">
                        <div class="level">6</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': stageStatus >= 6 }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Customer SOA</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': stageStatus >= 7 }">
                        <div class="level">7</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': stageStatus >= 7 }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Supplier Delivery Order</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': stageStatus >= 8 }">
                        <div class="level">8</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': stageStatus >= 8 }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Customer Delivery Order</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': stageStatus >= 9 }">
                        <div class="level">9</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': stageStatus >= 9 }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Supplier Invoice</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': stageStatus >= 10 }">
                        <div class="level">10</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': stageStatus >= 10 }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Customer Invoice</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': stageStatus >= 11 }">
                        <div class="level">11</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': stageStatus >= 11 }"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="informationUploadBox">

            <div class="card mb-4">
                <h5 class="card-header">Supplier Sign of Agreement</h5>
                <div class="card-body">
                    <div class="col-lg-12" v-if="suppSoaDoc == null">
                        <form class="form-inline my-2 my-lg-0">
                            <div class="input-group w-100">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01">
                                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="row uploadRowCustom" v-else>
                        <div class="col-lg-2">Uploaded at 15/02/2020</div>
                        <div class="col-lg-9"><a href="#">request_for_quotation_20200215.pdf</a></div>
                        <div class="col-lg-1 text-right uploadDeleteIcon"><i class="far fa-trash-alt"></i></div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-4">
                <h5 class="card-header">Customer Sign of Agreement</h5>
                <div class="card-body">
                    <div class="col-lg-12" v-if="cusSoaDoc == null">
                        <form class="form-inline my-2 my-lg-0">
                            <div class="input-group w-100">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01">
                                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="row uploadRowCustom" v-else>
                        <div class="col-lg-2">Uploaded at 15/02/2020</div>
                        <div class="col-lg-9"><a href="#">request_for_quotation_20200215.pdf</a></div>
                        <div class="col-lg-1 text-right uploadDeleteIcon"><i class="far fa-trash-alt"></i></div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-4">
                <h5 class="card-header">Supplier Invoice</h5>
                <div class="card-body">
                    <div class="col-lg-12" v-if="suppInvoiceDoc == null">
                        <form class="form-inline my-2 my-lg-0">
                            <div class="input-group w-100">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01">
                                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="row uploadRowCustom" v-else>
                        <div class="col-lg-2">Uploaded at 15/02/2020</div>
                        <div class="col-lg-9"><a href="#">request_for_quotation_20200215.pdf</a></div>
                        <div class="col-lg-1 text-right uploadDeleteIcon"><i class="far fa-trash-alt"></i></div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-4">
                <h5 class="card-header">Customer Invoice</h5>
                <div class="card-body">
                    <div class="col-lg-12" v-if="cusInvoiceDoc == null">
                        <form class="form-inline my-2 my-lg-0">
                            <div class="input-group w-100">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01">
                                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="row uploadRowCustom" v-else>
                        <div class="col-lg-2">Uploaded at 15/02/2020</div>
                        <div class="col-lg-9"><a href="#">request_for_quotation_20200215.pdf</a></div>
                        <div class="col-lg-1 text-right uploadDeleteIcon"><i class="far fa-trash-alt"></i></div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: 'piMain',
    data: function(){
        return {
            stageStatus: 2,
            suppSoaDoc: 1,
            cusSoaDoc: 1,
            suppInvoiceDoc: null,
            cusInvoiceDoc: null
        }
    },
    methods: {
        onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createImage(files[0]);
        }
    }
}
</script>

<style scoped>
.uploadDeleteIcon {
    color: red;
}
.uploadRowCustom {
    width: 100%;
    padding: 0 1.25rem;
}
.informationUploadBox {
    margin-top: 150px;
}
.progressIcon {
    border: 8px solid #d8d8d8;
    padding: 5px;
    width: 55px;
    border-radius: 50%;
    text-align: center;
    font-weight: bold;
    font-size: 1.3em;
    margin: auto;
    background: #e6e6e6;
    position: relative;
}
.progressBarLine{
    height: 10px;
    width: 200%;
    background: #d8d8d8;
    position: absolute;
    top: 50%;
    transform: translatey(-50%);
    right: 100%;
    z-index: -1;
}
.progressBarLineActive{
    background: #529688 !important;
}
.progressIconActive {
    border: 8px solid #009688 !important;
    background: #00dfca !important;
}
.level {
    color: white;
}
.progressBlock {
    width: 10%;
}
.progressRow {
    display: flex;
    position: absolute;
    width: calc(100% - 30px);
    margin-top: -115px;
}
.progressTitle {
    font-size: .75em;
    text-align: center;
    height: 35px;
    line-height: 15.5px;
    color: #009688;
    font-weight: bold;
}
.mt-5 {
    margin-top: 100px !important;
}
.progress-bar {
    background-color: #009688 !important;
}
</style>