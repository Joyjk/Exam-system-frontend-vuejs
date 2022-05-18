<template>
    <div class="container">
        <h2>View Result</h2>
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Select Candidate type</option>
                    <option value="1">Sr. Accounts</option>
                    <option value="2">Accounts</option>
                    <option value="3">Sr. Engineer</option>
                    <option value="3">Hr Admin</option>
                    <option value="3">Manager</option>
                    
            </select>
        <table class="table table-striped">
            <tr>
                <th>Ranking</th>
                <th>Candidate Name</th>
                <th>Candidate Type</th>
                <th>Question Set</th>
                <th>Marks / Total marks</th>
            </tr>
          <tbody>
                <tr>
                <td>1</td>
                <td>AAA</td>
                <td>Developer</td>
                <td>Alpha</td>
                <td>25/35</td>
            </tr>
             <tr>
                <td>2</td>
                <td>BBB</td>
                <td>Developer</td>
                <td>Beta</td>
                <td>18/35</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>