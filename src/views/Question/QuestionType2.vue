<template>
  <div>
    <div class="">
        <!-- <h3>This is Question type 2</h3>
        <span class="heading-text">Please ans this question</span> -->
        <div class="time-left">
            <h4>Time-Left: </h4>
            <h4>28.28</h4>
            <div>
                <h4>Mark: 10.212</h4>
            </div>
        </div>
      <h4 class="question">
       Q2: For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device.?
       For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device.?For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device.?
      </h4>
    </div>
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

        <textarea rows="13" cols="80"> </textarea>
    
    </div>
    <div class="d-grid gap-2" style="margin-left:22%; margin-right:22%">
        <button class="btn btn-primary" type="button">Submit</button>
        
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.question{
    padding: 1%;
    background-color: rgb(116, 116, 121);
    margin-left: 15%;
    margin-right: 15%;
    border-radius: 2rem;
    max-width: 100%;
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