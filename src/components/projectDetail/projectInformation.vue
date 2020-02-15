<template>
    <div id="piMain" class="content-margin-top">
        <div class="progressBar mb-5 mt-5">
            <div class="progressRow">
                <div class="progressBlock">
                    <div class="progressTitle">Supplier RFQ</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': p1 === true }">
                        <div class="level">1</div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Customer Quotation</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': p2 === true }">
                        <div class="level">2</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': p2 === true }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Supplier Quotation</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': p3 === true }">
                        <div class="level">3</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': p3 === true }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Customer Purchase Order</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': p4 === true }">
                        <div class="level">4</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': p4 === true }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Supplier Purchase Order</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': p5 === true }">
                        <div class="level">5</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': p5 === true }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Supplier SOA</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': p6 === true }">
                        <div class="level">6</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': p6 === true }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Customer SOA</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': p7 === true }">
                        <div class="level">7</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': p7 === true }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Supplier Delivery Order</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': p8 === true }">
                        <div class="level">8</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': p8 === true }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Customer Delivery Order</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': p9 === true }">
                        <div class="level">9</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': p9 === true }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Supplier Invoice</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': p10 === true }">
                        <div class="level">10</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': p10 === true }"></div>
                    </div>
                </div>
                <div class="progressBlock">
                    <div class="progressTitle">Customer Invoice</div>
                    <div class="progressIcon" v-bind:class="{ 'progressIconActive': p11 === true }">
                        <div class="level">11</div>
                        <div class="progressBarLine" v-bind:class="{ 'progressBarLineActive': p11 === true }"></div>
                    </div>
                </div>
            </div>
            <!-- <div class="progress " style>
                <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div> -->
        </div>
        <div class="informationUploadBox">
            <div class="card mb-4">
                <h5 class="card-header">Supplier Sign of Agreement</h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-9">
                            Welcome to Request For Quotation System
                        </div>
                        <div class="col-lg-3">
                            <form class="form-inline my-2 my-lg-0">
                                <!-- <button type="button" class="btn btn-primary btn-sm " @click="onFileChange">Upload File</button> -->
                                <!-- <input type="file" @change="onFileChange"> -->
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" @change="onFileChange">
                                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-4">
                <h5 class="card-header">Customer Sign of Agreement</h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-10">
                            Welcome to Request For Quotation System
                        </div>
                        <div class="col-lg-2">
                            <form class="form-inline my-2 my-lg-0">
                                <button type="button" class="btn btn-primary btn-sm" style="float: right;">Upload File</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-4">
                <h5 class="card-header">Delivery Order</h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-10">
                            Welcome to Request For Quotation System
                        </div>
                        <div class="col-lg-2">
                            <form class="form-inline my-2 my-lg-0">
                                <button type="button" class="btn btn-primary btn-sm" style="float: right;">Upload File</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-4">
                <h5 class="card-header">Customer Invoice</h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-10">
                            Welcome to Request For Quotation System
                        </div>
                        <div class="col-lg-2">
                            <form class="form-inline my-2 my-lg-0">
                                <button type="button" class="btn btn-primary btn-sm" style="float: right;">Upload File</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-4">
                <h5 class="card-header">Supplier Invoice</h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-10">
                            Welcome to Request For Quotation System
                        </div>
                        <div class="col-lg-2">
                            <form class="form-inline my-2 my-lg-0">
                                <button type="button" class="btn btn-primary btn-sm" style="float: right;">Upload File</button>
                            </form>
                        </div>
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
            p1: true,
            p2: true,
            p3: true,
            p4: true,
            p5: false,
            p6: false,
            p7: false,
            p8: false,
            p9: false,
            p10: false,
            p11: false
        }
    },
    methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
}
</script>

<style scoped>
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