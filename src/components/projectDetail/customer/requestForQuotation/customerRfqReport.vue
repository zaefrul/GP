<template>
<div id="customerRfqLetterForm">

    <div class="container">
      <div class="card" style="margin-top: 50px; margin-bottom: 100px;">
        <h3 class="card-header">
          Customer Request For Quotation Detail
          <router-link to="/crfq/list" class="btn btn-danger ml-3" style="float: right;">Back</router-link>
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
                
                <div class="row">
                    <div class="col text-center"><h5>REQUEST FOR QUOTATION</h5></div>
                </div>

                <table class="spoContact table table-sm">
                    <tbody>
                        <tr>
                            <td><b>From :</b></td>
                            <td colspan="3">
                                <p>
                                Grizpower Sdn Bhd<br/>
                                No 18 & 18 -1, Jalan Seri Rejang 3,	<br/>
                                Taman Seri Rampai<br/>
                                53300, Kuala Lumpur, Malaysia<br/>
                                T: +603 4144 3365 | F: +603 4144 3430
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td><b>E-Mail :</b></td>
                            <td>nuri.kamal@grizpower.com</td>
                            <td><p class="text-right"><b>Dated :</b></p></td>
                            <td><p class="text-right">xx/xx/xxxx</p></td>
                        </tr>

                        <tr>
                            <td><b>Attn :</b></td>
                            <td colspan="3">scholastica.siman@petronas.com.my</td>
                        </tr>
                        
                    </tbody>
                </table>

                <hr>

                <div class="body">
                    <p class="letterBody">
                        Kindly find our request for quotation for the items / equipment as specified in the attached list. Please provide the price both including and excluding our commission, the currency quoted, packing and any delivery charges on your side and the lead time of all items in one shipment. 
                    </p>
                    <p class="letterBody">If the lead time / point of collection varies, kindly separate them accordingly based on your best recommendation. 
                    </p>
                    <p class="letterBody">You may get hold of the undersigned at any of the contacts provided should you have any concerns or issues, or require any assistance.
                    </p> 
                    <p class="letterBody">Thank you very much and have a pleasant day ahead.
                    </p>

                </div>

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

        
        <div class="items">
            <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">QTY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>    
                        <ul>
                        <li>PART NAME : XXXXXXXXXXX</li>
                        <li>PART NUMBER : XXXXXXXXXXX</li>
                        <li>PART POSITION : XXXXXXXXXXX</li>
                        <li>PART MODEL NUMBER : XXXXXXXXXXX</li>
                        <li>SERIAL NUMBER : XXXXXXXXXXX</li>
                        <li>DRAWING NUMBER : XXXXXXXXXXX</li>
                        <li>TAG NUMBER : XXXXXXXXXXX</li>
                        </ul>  
                    </td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>    
                        <ul>
                        <li>PART NAME : XXXXXXXXXXX</li>
                        <li>PART NUMBER : XXXXXXXXXXX</li>
                        <li>PART POSITION : XXXXXXXXXXX</li>
                        <li>PART MODEL NUMBER : XXXXXXXXXXX</li>
                        <li>SERIAL NUMBER : XXXXXXXXXXX</li>
                        <li>DRAWING NUMBER : XXXXXXXXXXX</li>
                        <li>TAG NUMBER : XXXXXXXXXXX</li>
                        </ul>  
                    </td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>    
                        <ul>
                        <li>PART NAME : XXXXXXXXXXX</li>
                        <li>PART NUMBER : XXXXXXXXXXX</li>
                        <li>PART POSITION : XXXXXXXXXXX</li>
                        <li>PART MODEL NUMBER : XXXXXXXXXXX</li>
                        <li>SERIAL NUMBER : XXXXXXXXXXX</li>
                        <li>DRAWING NUMBER : XXXXXXXXXXX</li>
                        <li>TAG NUMBER : XXXXXXXXXXX</li>
                        </ul>  
                    </td>
                    <td>12</td>
                  </tr>
                </tbody>
            </table>
        </div>

        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'customerRfqLetterForm'
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