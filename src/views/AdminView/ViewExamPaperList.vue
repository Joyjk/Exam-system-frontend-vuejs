<template>
    <div class="container">
        <input type="date" class="mb-3" placeholder="Pick a date" name="" id="">
        <table  class="table table-success table-striped">
            <tr>
                <th>Candidate Name</th>
                <th>Candidate Type</th>
                <th>View exam paper</th>
                
            </tr>
            <tr>
                <td>AAA</td>
                <td>Sr.Engineer</td>
                <td>
                    <!-- <button type="button" :to="/viewexam">View exam Paper</button> -->
                    <router-link to='/viewexam' type="button">View exam Paper</router-link>
                </td>
            </tr>
            <tr>
                <td>BBB</td>
                <td>Sr.Engineer</td>
                <td>

                    <!-- <button type="button">View exam Paper</button> -->
                    <router-link to='/viewexam' type="button">View exam Paper</router-link>
                </td>
            </tr>
        </table>
    </div>
</template>