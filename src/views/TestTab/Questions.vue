<template>
  <div>
      <div>
          <form method="post" v-on:submit="addAnsSheet">
    <div class="">
        <!-- <h3>This is Question type 2</h3>
        <span class="heading-text">Please ans this question</span> -->
        <div class="time-left">
            <h4>Time-Left: </h4>
            <!-- <h4>{{timerCount }}</h4> -->
            <h4>50.20 Min</h4>
            <div>
                <h4>Mark: {{questionData.mark}}</h4>
            </div>
        </div>
      <h4 class="question">
       <!-- Q2: For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device.?
       For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device.?For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device.? -->
       {{questionData.question}}
      </h4>
    </div>
    <div>
        <div v-if="questionData.questionPicture">
             <img src="https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png" height="400" alt=""> 
        </div>
        <br>
    </div>
    <div v-if="questionData.questionType==='written'">
        <textarea rows="13" v-model="form.givenAns" cols="80"> </textarea>
        <br>
        <br>
        </div>
    <div class="ansButton">

        
        

<!-- 
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" >
        <label class="btn btn-outline-primary" for="btnradio1">a)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.</label> -->

        <div v-if="questionData.questionType==='mcq'">
            <input type="radio" class="btn-check"  v-model="form.givenAns"  :value="option1" name="btnradio" :id="option1" autocomplete="off" >
            <label class="btn btn-outline-primary" :for="option1">{{questionData.option1}}</label>
        </div>
        <!-- <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" >
        <label class="btn btn-outline-primary" for="btnradio2">b)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.</label>
         -->


        <div v-if="questionData.questionType==='mcq'">
            <input type="radio" class="btn-check"  v-model="form.givenAns" :value="option2"  name="btnradio" :id="option2" autocomplete="off" >
            <label class="btn btn-outline-primary" :for="option2">{{questionData.option2}}</label>
        </div>


        <!-- <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" >
        <label class="btn btn-outline-primary" for="btnradio3">c)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.</label> -->

        <div v-if="questionData.questionType==='mcq'">
            <input type="radio" class="btn-check"   v-model="form.givenAns" :value="option3"  name="btnradio" :id="option3" autocomplete="off" >
            <label class="btn btn-outline-primary" :for="option3">{{questionData.option3}}</label>
        </div>

        <!-- <div v-if="questionData.questionType==='mcq'">
            <input type="radio" class="btn-check"    name="btnradio" id="btnradio3" autocomplete="off" >
            <label class="btn btn-outline-primary" for="btnradio3">{{questionData.option3}}</label>
        </div> -->


        <!-- <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" >
        <label class="btn btn-outline-primary" for="btnradio4">d)This is a long paragraph written to show how the line-height of an
        element is affected by our utilities.</label> -->
        <div v-if="questionData.questionType==='mcq'">
            <input type="radio" class="btn-check"  v-model="form.givenAns"  :value="option4"  name="btnradio" :id="option4" autocomplete="off" >
            <label class="btn btn-outline-primary" :for="option4">{{questionData.option4}}</label>
        </div>

        <div v-if="questionData.questionType==='mcq'">
            <!-- v-model="form.givenAns" -->
            <!-- :value="option5" -->
            <input type="radio" class="btn-check"  v-model="form.givenAns" :value="option5"   name="btnradio" :id="option5" autocomplete="off" >
            <label class="btn btn-outline-primary" :for="option5">{{questionData.option5}}</label>
        </div>

        <input type="hidden" :value="form.questionId">

    </div>
<!-- 
    <pre>
        {{questionData}}
    </pre> -->

    <div class="d-grid gap-2" style="margin-left:22%; margin-right:22%">
        <button class="btn btn-primary" type="submit">Submit</button>
        
    </div>
    </form>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' 
Vue.use(VueAxios, axios)

export default {
    name:'q-s',
    props:{
        questionData:Object,
        updateTab:Function,
    },
    data(){
       return{
            form:{
            candidateId:1,
            questionId: this.questionData.questionId,
            givenAns:"",
            givenMark:0,
           // other:this.questionData,
            
            
        },
            option1:this.questionData.option1,
            option2:this.questionData.option2,
            option3:this.questionData.option3,
            option4:this.questionData.option4,
            option5:this.questionData.option5,
            timerCount: 120,

        
       }
    },
    methods:{
        addAnsSheet(e){
            e.preventDefault();


            var dataN = JSON.parse(JSON.stringify(this.form))
            console.log(dataN)

            Vue.axios.post('https://localhost:44332/api/AnsSheets', dataN).then((res)=>{
                //console.log(res.status)
                if(res.status===201)
                {
                    //console.log("Success")
                    
                    this.updateTab(1);
                    //window.location.reload();
                }
            })
           // this.updateTab(1);
        }
    },
    watch:{
         timerCount: {
                handler(value) {

                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }
                    if(value==0)
                    {
                       // this.addAnsSheet();
                    }

                },
                immediate: true // This ensures the watcher is triggered upon creation
            }
    }
};
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
    margin-top: 5%;
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
.ansButton div{
    
    margin: 0 auto;
    margin-bottom: 1%;
    width: 40%;
}
</style>