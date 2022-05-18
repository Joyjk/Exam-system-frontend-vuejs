<template>
    <div>
        <h1>Set and Question mapping</h1>
       
       <div class="container">
           <select class="form-select form-select-lg mb-3" style="text-align:center" aria-label=".form-select-lg example">
                    <option selected>Select Candidate type</option>
                    <option value="1">Sr. Accounts</option>
                    <option value="2">Accounts</option>
                    <option value="3">Sr. Engineer</option>
                    <option value="3">Hr Admin</option>
                    <option value="3">Manager</option>
                    
            </select>
            <select class="form-select form-select-lg mb-3" style="text-align:center" aria-label=".form-select-lg example">
            <option selected>Candidate Session</option>
            <option value="1">April-Jr.Developer</option>
            <option value="2">January-Developer</option>
            <option value="3">August-FrontEnd-Developer</option>
            </select>
            <form >
                <div class="container" style="border: 1px solid black">
                        <div class="row">
                            <div class="table-responsive col-md-6">
                                <div class="btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
                        <table class="">
                            <tr>
                                <th>Set</th>
                            </tr>
                            <tr>
                                
                                <td>
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" >
                                    <label class="btn btn-outline-warning" for="btnradio1">Alpha</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                                    <label class="btn btn-outline-warning" for="btnradio2">Beta</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                                    <label class="btn btn-outline-warning" for="btnradio3">Gamma</label>
                                </td>
                            </tr>
                        </table>
                    </div>
                            </div>
                            <div class="table-responsive col-md-6">
                                <div class="btn-group-vertical" role="group" aria-label="Basic checkbox toggle button group">
                                <table>
                                    <tr>
                                        <th>
                                            Questions
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
                                            <label class="btn btn-outline-primary" for="btncheck1"> For faster mobile-friendly development, 
                                                use responsive display classes for showing and hiding elements by device.?</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
                                            <label class="btn btn-outline-primary" for="btncheck2">This is a long paragraph written to show how the line-height of an element
                                                is affected by our utilities. Classes are applied to the element itself or sometimes the parent element?</label>

                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td>

                                            <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
                                            <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
                                        </td>
                                    </tr>
                                </table>
                                </div>
                            </div>
                            </div>
                            
                </div>
                <br>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Time Duration</option>
                    <option value="1">50 min</option>
                    <option value="2">20 min</option>
                    <option value="3">30 min</option>
                 
                    
            </select>

                <div class="d-grid gap-2" style="margin-top:2%">
                    <button class="btn btn-primary" type="button">Submit</button>                
                </div>
            </form>
       </div>
    </div>
</template>
<style scoped>
label{
    color: black;
}
</style>