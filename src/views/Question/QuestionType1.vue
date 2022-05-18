<template>
  <div>
    <div class="">
        <h3>This is Question type 1</h3>
        <span class="heading-text">Please ans this question</span>
        <div class="time-left">
            <h4>Time-Left: </h4>
            <h4>30</h4>
            <div>
                <h4>Mark: 5</h4>
            </div>
        </div>
      <h4 class="question">
       Q1: This is a long paragraph written to show how the line-height of an
        element is affected by our utilities. Classes are applied to the element
        itself or sometimes the parent element?
      </h4>
    </div>
    <div class="ansButton">
        <button class="btn btn-primary" type="radio">
            a)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.
        </button>

        <input type="radio" class="btn btn-primary" value="a)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.">
        
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
        element is affected by our utilities.This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.
        </button>
        <button class="btn btn-primary">
            e)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.
        </button>
        
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.question{
    padding: 1%;
    background-color: rgb(191, 191, 196);
    margin-left: 10%;
    margin-right: 15%;
    border-radius: 2rem;
    width: 85%;
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
.ansButton{
    margin-top: 3%;
}
.ansButton button{
    margin: 1%;
    width: 40%;
    
}
</style>