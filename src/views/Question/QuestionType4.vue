
<template>
<div>
   <h3>Welcome</h3>
   <h5>Please answer all the question given below</h5>
  <form-wizard @onComplete="onComplete">
<!--   
   <pre>{{questionsData}}</pre> -->
    <tab-content title="Question " v-for="index in questionsData.length, questionsData" v-bind:key="index">

      <!-- <pre>{{index}}</pre> -->
      <!-- title="Question 1" v-for="item in questionsData" v-bind:key="item.questionId" -->
      <!-- <div v-for="item in questionsData" v-bind:key="item.questionId">
          <h1>{{item.questionId}}</h1>
          
      </div> -->
      
        <Qus1  :questionsData1= {index} :getData=getAllData />



    </tab-content>
     

    <!-- <tab-content title="Question 2">
      

        <Qus1 />



    </tab-content> -->

    <!-- <tab-content title="Question 2">
      

        <Qus2 />



    </tab-content>

        <tab-content title="Question 3">
      

        <Qus3 />



    </tab-content> -->


  </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent, ValidationHelper } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
// import { required } from "vuelidate/lib/validators";
// import { email } from "vuelidate/lib/validators";
// import { numeric } from "vuelidate/lib/validators";
import Qus1 from '../Question/QuestionType1.vue'
// import Qus2 from '../Question/QuestionType2.vue'
// import Qus3 from '../Question/QuestionType3.vue'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' 
Vue.use(VueAxios, axios)

export default {
  name: "StepFormValidation",
  components: {
    FormWizard,
    TabContent,
    Qus1,
    // Qus2,
    // Qus3,
  },
  mixins: [ValidationHelper],
  data() {
    return {
       questionsData:undefined,
       questionsDataArray:[],
      formData: {
        name: "",
        email: null,
        phone:'',
        birthDate:'',
        sscPassingYear:'',
        hscPassingYear:'',
        universityPassingYear:'',
        nidNo:'',
        birthCertificateNo:'',
        companyName: null,
        experieceDetails:null,
        fatherName:'',
        motherName:'',
        //numberOfEmployees: null,
        experienceYear:null
        // referral: null,
        // terms: false,
      },
      valueItem:{
        id:'',
        data:{

        }
      },
      validationRules: [
        // { name: { required }, email: { required, email}, phone:{required, numeric} }, //required, numeric
        // {  sscPassingYear:{ numeric},hscPassingYear:{ numeric}, universityPassingYear:{ numeric}, nidNo:{numeric},
        // birthCertificateNo:{ numeric}, 
        // fatherName:{}, motherName:{}, birthDate:{required},  }, //numberOfEmployees: { required, numeric }
        // { experienceYear:{required, numeric} },
      ],
    };
  },
  methods: {
    onComplete() {
      //alert("Submitting Form ! Rock On");
      const data =[{
          name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        birthDate:this.formData.birthDate,
        sscPassingYear: parseInt(this.formData.sscPassingYear),
        hscPassingYear: parseInt(this.formData.hscPassingYear),
        universityPassingYear: parseInt(this.formData.universityPassingYear),
        nidNo: this.formData.nidNo,
        birthCertificateNo:this.formData.birthCertificateNo,
        companyName: this.formData.companyName,
        experieceDetails: this.formData.experieceDetails,
        fatherName: this.formData.fatherName,
        motherName: this.formData.motherName,
        //numberOfEmployees: this.formData.numberOfEmployees,
        experienceYear:parseInt(this.formData.experienceYear),
        
      }]  

      console.log(data[0])

    //   Vue.axios.post('https://localhost:44332/api/Candidates', data[0]).then((res)=>{
    //             console.log(res)
    //         })

    },
  },
  mounted(){
      Vue.axios.get("https://localhost:44332/api/Questions").then((resp)=>{
            this.questionsData=JSON.parse(JSON.stringify( resp.data))
            this.questionsDataArray.push((resp.data))
             console.warn(JSON.parse(JSON.stringify( resp.data)))
        })


        for (let index = 1; index <= this.questionsData.length; index++) {
          this.valueItem.id=index;
          this.valueItem.data=this.questionsData[index]
          
        }
       // console.warn(this.valueItem)
  }

};
</script>
