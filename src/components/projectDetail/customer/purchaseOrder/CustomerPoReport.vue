<template>
<div id="customerPoLetterForm">

    <div class="container-fluid">
      <div class="card" style="margin-top: 50px; margin-bottom: 100px;">
        <h3 class="card-header">
          Customer Purchase Order Detail
          <router-link to="/spo/list" class="btn btn-danger ml-3" style="float: right;">Back</router-link>
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

        <div class="title text-center">
            <h5>PURCHASE ORDER (GP-010119-XXX)</h5>
        </div>
        
        <div class="contact">
            <div class="container">
                <table class="spoOffice table table-sm">
                    <tbody>
                        <tr>
                            <td>
                                    ELLIOTT EBARA SINGAPORE PTE LTD<br/>
                                    1A INTERNATIONAL BUSINESS PARK #07-01<br/>
                                    609933, SINGAPORE<br/>
                                    T: +65 65636776 | F: +65 65631387</td>
                            <td class="text-right"><b>Date of Quote : </b>01st Jan 2019</td>
                        </tr>
                    </tbody>
                </table>

                <table class="spoContact table table-sm">
                    <tbody>
                        <tr>
                            <td><b>Attention :</b></td>
                            <td>xxx@elliot-turbo.com</td>
                            <td><p class="text-right"><b>EE REF#:</b></p></td>
                            <td><p class="text-right">10000</p></td>
                        </tr>

                        <tr>
                            <td><b>from :</b></td>
                            <td>sales@grizpower.com</td>
                            <td><p class="text-right"><b>GP PO# :</b></p></td>
                            <td><p class="text-right">GP-010110-XXX</p></td>
                        </tr>

                        <tr>
                            <td colspan="2"></td>
                            <td><p class="text-right"><b>GP REF# :</b></p></td>
                            <td><p class="text-right">GP0001</p></td>
                        </tr>
                    </tbody>
                </table>

                <table class="spoOther table table-sm">
                    <tbody>
                        <tr>
                            <td class="text-right"><b>CURRENCY : </b>US DOLLAR (USD)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="items">
            <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Line</th>
                    <th scope="col">S/N</th>
                    <th scope="col">Model</th>
                    <th scope="col">Part Name</th>
                    <th scope="col">Part Number</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">New Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>SN12412512512512</td>
                    <td>AB</td>
                    <td>turbine</td>
                    <td>abc2124</td>
                    <td>23</td>
                    <td>9,999.00</td>
                    <td>9,999.00</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>SN12412512512512</td>
                    <td>AB</td>
                    <td>turbine</td>
                    <td>abc2124</td>
                    <td>23</td>
                    <td>9,999.00</td>
                    <td>9,999.00</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>SN12412512512512</td>
                    <td>AB</td>
                    <td>turbine</td>
                    <td>abc2124</td>
                    <td>23</td>
                    <td>9,999.00</td>
                    <td>9,999.00</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>SN12412512512512</td>
                    <td>AB</td>
                    <td>turbine</td>
                    <td>abc2124</td>
                    <td>23</td>
                    <td>9,999.00</td>
                    <td>9,999.00</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td colspan="6"><h6>GRAND TOTAL</h6></td>
                    <td><h6>29,900.00</h6></td>
                  </tr>
                </tbody>
            </table>
        </div>

        <div class="info mb-5 mt-5">
            <div class="row mb-3">
                <div class="col"><u><b>TERMS AND CONDITIONS</b></u></div>
            </div>
            <div class="row">
                <div class="col"><b>A. DELIVERY TERMS: </b></div>
                <div class="col-8"><b>EX-WORKS – COLLECTION BY GRIZPOWER</b></div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    Collection and delivery will be made by Grizpower’s appointed freight forwarding agent, A Hartrodt. Kindly ensure all items are packaged and sealed in a box / carton in accordance to standard air freight delivery requirements. Packing List should be attached to each cargo with the item description clearly stated together with the respective part, model and serial number, where applicable. Do also provide the total weight and dimensions of each cargo and the estimated date that this would be ready for collection with the appointed person in charge full name, address, e-mail and phone number for collection communication and arrangement.
                </div>
            </div>
            <div class="row">
                <div class="col"><b>B. PAYMENT TERMS: </b></div>
                <div class="col-8"><b>60 DAYS FROM DATE OF INVOICE</b></div>
            </div>
            <div class="row mb-5">
                <div class="col">
                    Kindly submit your invoice once items are ready for dispatch. Invoice should include your Bank Name, address and contact number together with your account name, number and respective codes where applicable for Telegraphic Transfer (TT). Invoice should also include all order details, P.O and reference numbers. Grizpower will cover all bank fees / charges where necessary apart from Invoices made in Malaysian Ringgit (MYR), whereby currency conversion is required to Singapore Dollars (SGD). In this case the total amount paid / converted will be exactly as per your invoice value
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

        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'customerPoLetterForm'
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