<template>
    <div>
        <h2 class="fw-bolder">Welcome</h2>
        <div class="frame1">
            <h1 > you have 30 minutes</h1>
        </div>
        <br>
        <br>

        <div>
        <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Terms and conditions !</b-button>

        <b-modal id="bv-modal-example" hide-footer>
            <template #modal-title>
                Terms and Conditions
            </template>
            <div class="d-block text-center">
            <h3>Hello From This Modal!</h3>
            <ul style="list-style-type: none;">
                <li>Hello From This Modal!</li>
                <li>Hello From This Modal!</li>
                <li>Hello From This Modal!</li>
                <li>Hello From This Modal!</li>
            </ul>
            </div>
            <b-button class="mt-3" style="margin-left:70%" block variant="primary" @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
        </b-modal>
        </div>



        <div>
            <button class="btn btn-primary btn-lg startbtn">Start</button>
        </div>
       
      
       
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.frame1{
    /* height: 50%;
    width: 40%; */
    background-color: rgb(140, 140, 235);
    padding: 10%;
    margin-left: 10%;
    margin-right: 10%;
    border: 2px solid black;
    border-radius: 7rem;
}
.startbtn{
    margin-top: 2%;
}
</style>