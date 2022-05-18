<template>
    <div>
        <div class="container">
            <h2>Assign Questions before exam</h2>
            <select class="form-select form-select-lg mb-3" style="text-align:center" aria-label=".form-select-lg example">
                    <option selected>Select Candidate type</option>
                    <option value="1">Sr. Accounts</option>
                    <option value="2">Accounts</option>
                    <option value="3">Sr. Engineer</option>
                    <option value="3">Hr Admin</option>
                    <option value="3">Manager</option>
                    
            </select>
            <select class="form-select form-select-lg mb-3" style="text-align:center" aria-label=".form-select-lg example">
            <option selected>Select Candidate Session</option>
            <option value="1">April-Jr.Developer</option>
            <option value="2">January-Developer</option>
            <option value="3">August-FrontEnd-Developer</option>
            </select>
            <div class="row">
                <div class="table-responsive col-md-6">
                    <div class="btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
                    <table  class="table table-striped">
                        <tr>
                                <th>Candidate Name</th>
                                <th>Candidate Type</th>
                                <th>Question Set</th>
                                <th>Time Duration</th>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btncheck1"> AAA</label>
                            </td>
                            <td>
                                Accounts
                            </td>
                            <td>
                                <select class="" aria-label="Default select example">
                                <option selected>select Set</option>
                                <option value="1">Alpha</option>
                                <option value="2">Beta</option>
                                <option value="3">Gamma</option>
                                </select>
                            </td>
                            <td>
                                50 min
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btncheck2"> BBB</label>
                            </td>
                            <td>
                                Accounts
                            </td>
                            <td>
                                <select class="" aria-label="Default select example">
                                <option selected>select Set</option>
                                <option value="1">Alpha</option>
                                <option value="2">Beta</option>
                                <option value="3">Gamma</option>
                                </select>
                            </td>
                            <td>
                                50 min
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btncheck3"> CCC</label>
                            </td>
                            <td>
                                Accounts
                            </td>
                            <td>
                                <select class="" aria-label="Default select example">
                                <option selected>Select Set</option>
                                <option value="1">Alpha</option>
                                <option value="2">Beta</option>
                                <option value="3">Gamma</option>
                                </select>
                            </td>
                            <td>
                                50 min
                            </td>
                        </tr>
                        <tr>
                            
                            <td colspan="4">
                                <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button">Submit</button>
                                
                                </div>
                            </td>
                        </tr>
                    </table>
                    </div>
                </div>
                
                <div class="table-responsive col-md-6">
                    <table  class="table ">
                        <tr>
                            <th>Set</th>
                            <th>Questions</th>
                        </tr>
                        <tbody>
                            <tr>
                            <td>Alpha</td>
                            <td>
                                 <button class="btn btn-primary" type="button">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Beta</td>
                            <td>
                                 <button class="btn btn-primary" type="button">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Gamma</td>
                            <td>
                                 <button class="btn btn-primary" type="button">View</button>
                            </td>
                        </tr>
                        </tbody>
                        
                    </table>
                </div>
                
            </div>
        </div>
    </div>
</template>