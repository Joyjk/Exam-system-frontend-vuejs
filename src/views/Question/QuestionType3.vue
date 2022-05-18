<template>
  <div>
    <div class="">
        <!-- <h3>This is Question type 3</h3>
        <span class="heading-text">Please ans this question</span> -->
        <div class="time-left">
            <h4>Time-Left: </h4>
            <h4>25.29</h4>
            <div>
                <h4>Mark: 7</h4>
            </div>
        </div>
      <h4 class="question">
       Q3: For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device.?
      </h4>
    </div>
    <div>
        <img src="https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png" height="400" alt="">
    </div>
    <br>
    <div class="ansButton">
        <!-- <button class="btn btn-primary">
            a)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.
        </button>
        
        <button class="btn btn-primary">
            b)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.
        </button>
        <button class="btn btn-primary">
            c)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.
        </button>
        <button class="btn btn-primary">
            d)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.
        </button>
        <button class="btn btn-primary">
            e)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.
        </button> -->

        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" >
        <label class="btn btn-outline-primary" for="btnradio1">a)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" >
        <label class="btn btn-outline-primary" for="btnradio2">b)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" >
        <label class="btn btn-outline-primary" for="btnradio3">c)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" >
        <label class="btn btn-outline-primary" for="btnradio4">d)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" >
        <label class="btn btn-outline-primary" for="btnradio5">e)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.</label>
    
    </div>
    <!-- <div class="d-grid gap-2" style="margin-left:22%; margin-right:22%">
        <button class="btn btn-primary" type="button">Submit</button>
        
    </div> -->
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.btn{
    margin-top: 6px;
}
.question{
    padding: 1%;
    background-color: rgb(116, 116, 121);
    margin-left: 15%;
    margin-right: 15%;
    border-radius: 5rem;
}
.time-left{
    padding: 0.5%;
    background-color: rgb(131, 23, 23);
    color: aliceblue;
    width: 10%;
    margin-left: 30%;
    display: inline-block;
    border-radius: 3em;
    position: absolute;
}
.time-left div{
    /* display: inline-block; */
    width: 80%;
    
    margin-left: 10%;
    background-color: rgb(146, 226, 126);
    color: rgb(0, 0, 0);
}
.heading-text{
    text-decoration: black;
    position: relative;
    z-index: 9;
    background-color: rgb(197, 22, 22);
    /* margin-left: 100px; */
}
.ans1{
    padding: 1%;
    background-color: rgb(91, 94, 241);
     margin-left: 12%;
    margin-right: 12%;
    border-radius: 5rem;
    color: azure;
}
.ansButton button{
    margin: 1%;
    width: 40%;
}
</style>