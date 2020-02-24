<template>
<div id="supplierDoLetterForm">

    <div class="container-fluid">
      <div class="card" style="margin-top: 50px; margin-bottom: 100px;">
        <h3 class="card-header">
          Supplier Delivery Order Detail
          <router-link to="/sdo/list" class="btn btn-danger ml-3" style="float: right;">Back</router-link>
          <button
            id="printInvoice"
            type="button"
            class="btn btn-primary ml-3"
            style="float: right;"
            @click="printInvoice"
          >
            <i class="fa fa-print"></i> Print
          </button>
          <button type="button" class="btn btn-primary ml-3" style="float: right;">
            <i class="fa fa-file-pdf-o"></i> Export
          </button>
        </h3>

        <div class="card-body">
        
        <div class="header mb-3">
            <div class="container">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>
                                <h6 class="text-danger text-uppercase">GRIZPOWER SDN BHD (713693-T)</h6>
                                <p>No 18 & 18-1, Jalan Seti Rejang 3<br/>
                                    Taman Sri Rampai<br/>
                                    53300 Kuala Lumpur, Malaysia
                                </p>
                            </td>
                            <td>
                                <p class="text-right">
                                    Tel: 603-4144 3365<br/>
                                    Fax: 603-4144 3430<br/>
                                    E-Mail: info@grizpower.com
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <div class="contact">
            <div class="container">
                <table class="spoOffice table table-sm">
                    <tbody>
                        <tr>
                            <td colspan="2"><h6 class="text-uppercase">XXXXX XXXXXXX XXXX Sdn Bhd</h6><p>
                                    18th KM<br/>
                                    P.O.<br/>
                                    97008 Bintulu, Sarawak, Malaysia
                                    </p></td>
                            <td colspan="2" class="text-right"><b>Date of Quote : </b>01st Jan 2019</td>
                        </tr>
                    </tbody>
                </table>

                <table class="spoContact table table-sm">
                    <tbody>
                        <tr>
                            <td><b>Attention :</b></td>
                            <td>XXXXXXXXXX</td>
                            <td><p class="text-right"><b>Prepared by :</b></p></td>
                            <td><p class="text-right">XXXXXXXXXXX</p></td>
                        </tr>

                        <tr>
                            <td><b>Contact :</b></td>
                            <td>086-XXX XXXX</td>
                            <td><p class="text-right"><b>Contact :</b></p></td>
                            <td><p class="text-right">086-XXX XXXX</p></td>
                        </tr>

                        <tr>
                            <td><b>E-Mail :</b></td>
                            <td>scholastica.siman@petronas.com.my</td>
                            <td><p class="text-right"><b>E-Mail :</b></p></td>
                            <td><p class="text-right">sales@grizpower.com.my</p></td>
                        </tr>
                        
                        <tr>
                            <td><b>RFQ No :</b></td>
                            <td>XXXXXXXXXXXXX</td>
                            <td><p class="text-right"><b>GP Ref No :</b></p></td>
                            <td><p class="text-right">GP3582</p></td>
                        </tr>

                        <tr>
                            <td><b>RFQ Name :</b></td>
                            <td>086-XXX XXXX</td>
                            <td><p class="text-right"><b>Petronas License :</b></p></td>
                            <td><p class="text-right">713693-T</p></td>
                        </tr>

                        <tr>
                            <td><b>SUS Portal ID :</b></td>
                            <td>GRIZPOWER</td>
                            <td><p class="text-right"><b>Closing Date :</b></p></td>
                            <td><p class="text-right">18th May 2019</p></td>
                        </tr>
                    </tbody>
                </table>

                <table class="spoOther table table-sm">
                    <tbody>
                        <tr>
                            <td colspan="2"><h6 class="text-danger">GP3582 - TECHNICAL PROPOSAL (UNPRICED)</h6></td>
                            <td colspan="2" class="text-right"><b>CURRENCY : </b>MALAYSIAN RINGGIT (MYR)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="items">
            <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">QTY</th>
                    <th scope="col">UNIT PRICE</th>
                    <th scope="col">TOTAL PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Item Description</td>
                    <td>12</td>
                    <td>2,500.00</td>
                    <td>9,999.00</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Item Description</td>
                    <td>4</td>
                    <td>8,000.00</td>
                    <td>9,999.00</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Item Description</td>
                    <td>5</td>
                    <td>2,000.00</td>
                    <td>9,999.00</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td colspan="3"><h6>GRAND TOTAL IN MYR</h6></td>
                    <td><h6>29,900.00</h6></td>
                  </tr>
                </tbody>
            </table>
        </div>

        <div class="info mb-5 mt-5">
            <div class="row mb-3">
                <div class="col"><u><b>TERMS AND CONDITIONS</b></u></div>
            </div>
            <div class="row mb-3">
                <div class="col"><b>1. PRICE VALIDITY: </b></div>
                <div class="col-8">30 Days from date of submission / closing date as stated above. </div>
            </div>
            <div class="row mb-3">
                <div class="col"><b>2. PAYMENT TERMS: </b></div>
                <div class="col-8">30 days after acceptance of delivery and receipt of invoice. </div>
            </div>
            <div class="row mb-3">
                <div class="col"><b>3. DELIVERY TERMS: </b></div>
                <div class="col-8">Delivery At Place (DAP),  <b>ABF Warehouse, 97008 Bintulu, Malaysia</b> </div>
            </div>
            <div class="row mb-3">
                <div class="col"><b>4. DELIVERY CHARGES: </b></div>
                <div class="col-8">Includes factory packing charges, handling fees, ground and air freight charges + Insurance & any custom duty payable in or from the country of origin and Malaysia with final delivery directly to the address stated above. </div>
            </div>
            <div class="row mb-3">
                <div class="col"><b>5. LEAD TIME: </b></div>
                <div class="col-8"><b>42 days (6 weeks)</b> after receipt of order via SUS Portal. The lead time is strictly from the date of order to the date these goods are ready for collection at the address stated above. Any delays for the collection and/or arrangements of these items by your appointed freight forwarder should not reflect or impact the delivery performance or Purchase Order obligations of Grizpower. </div>
            </div>
        </div>

        <div class="sign">
            <div class="row mb-5">
                <div class="col">For and on behalf of Grizpower Sdn. Bhd.</div>
            </div>
            <div class="row mt-5">
                <div class="col">...........................................................................</div>
            </div>
            <div class="row">
                <div class="col">
                    XXX XXXX<br/>
                    SENIOR SALES EXECUTIVE<br/>
                    +6019-XXX XXXX
                </div>
            </div>
        </div>

        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'supplierDoLetterForm'
}
</script>

<style scoped>
.spoOffice td{
border: 0 !important;
}
.spoContact td{
border: 0 !important;
line-height: .5px;
}
</style>