
<template>
<div>
   <h3>Welcome</h3>
   <h5>Please enter your information to continue</h5>
  <form-wizard @onComplete="onComplete">
    <tab-content title="Question" :selected="true" v-for="index in questionsData.length, questionsData" v-bind:key="index">
      
      <h4 class="question">
       <!-- Q1: This is a long paragraph written to show how the line-height of an
        element is affected by our utilities. Classes are applied to the element
        itself or sometimes the parent element? -->
        {{index.question}}
      </h4>

        <div v-if="index.questionPicture==='null'">
         <img src="https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png" height="400" alt=""> 
        </div>

        <div  v-if="index.questionType==='written'">
            <textarea rows="13" cols="80"> </textarea>
        </div>

        <div  v-if="index.questionType==='mcq'">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" >
                <label class="btn btn-outline-primary" for="btnradio1">{{index.option1}}</label>
        </div>

        <div  v-if="index.questionType==='mcq'">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" >
        <label class="btn btn-outline-primary" for="btnradio2">{{index.option2}}</label>
        </div>

          <div  v-if="index.questionType==='mcq'">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" >
        <label class="btn btn-outline-primary" for="btnradio3">{{index.option3}}</label>
        </div>

        <div  v-if="index.questionType==='mcq'">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" >
        <label class="btn btn-outline-primary" for="btnradio4">{{index.option4}}</label>
        </div>


        <div  v-if="index.questionType==='mcq'">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" >
        <label class="btn btn-outline-primary" for="btnradio5">{{index.option5}}</label>
        </div>

    </tab-content>
    <!-- <tab-content title="About your other details">
      

        <div class="form-group">
        <label for="fatherName">Father Name</label>
        <input
          type="text"
          class="form-control"
          :class="hasError('fatherName') ? 'is-invalid' : ''"
          placeholder="Enter your Father name"
          v-model="formData.fatherName"
        />
        <div v-if="hasError('fatherName')" class="invalid-feedback">
          <div class="error" v-if="!$v.formData.fatherName.required">
            Please Enter your father name.
          </div>
        </div>
        </div>


        <div class="form-group">
        <label for="motherName">Mother Name</label>
        <input
          type="text"
          class="form-control"
          :class="hasError('motherName') ? 'is-invalid' : ''"
          placeholder="Enter your Mother name"
          v-model="formData.motherName"
        />
        <div v-if="hasError('motherName')" class="invalid-feedback">
          <div class="error" v-if="!$v.formData.motherName.required">
            Please Enter your Mother name.
          </div>
        </div>
        </div>

        

        <div class="form-group">
        <label for="birthDate">Birthdate</label>
        <input
          type="text"
          class="form-control"
          :class="hasError('birthDate') ? 'is-invalid' : ''"
          placeholder="Enter your Birthdate"
          v-model="formData.birthDate"
        />
        <div v-if="hasError('birthDate')" class="invalid-feedback">
          <div class="error" v-if="!$v.formData.birthDate.required">
            Please Enter your Birthdate.
          </div>
        </div>
        </div>

     

        <div class="form-group">
        <label for="sscPassingYear">SSC Passing year</label>
        <input
          type="text"
          class="form-control"
          :class="hasError('sscPassingYear') ? 'is-invalid' : ''"
          placeholder="Enter your SSC Passing year"
          v-model="formData.sscPassingYear"
        />
        <div v-if="hasError('sscPassingYear')" class="invalid-feedback">
          <div class="error" v-if="!$v.formData.sscPassingYear.required">
         
          </div>
          <div class="error" v-if="!$v.formData.sscPassingYear.numeric">
            Should be a valid value.
          </div>
        </div>
        </div>


        <div class="form-group">
        <label for="hscPassingYear">HSC Passing year</label>
        <input
          type="text"
          class="form-control"
          :class="hasError('hscPassingYear') ? 'is-invalid' : ''"
          placeholder="Enter your HSC Passing year"
          v-model="formData.hscPassingYear"
        />
        <div v-if="hasError('hscPassingYear')" class="invalid-feedback">
         
          <div class="error" v-if="!$v.formData.hscPassingYear.numeric">
            Should be a valid value.
          </div>
        </div>
        </div>

   

        <div class="form-group">
        <label for="universityPassingYear">University Passing year</label>
        <input
          type="text"
          class="form-control"
          :class="hasError('universityPassingYear') ? 'is-invalid' : ''"
          placeholder="Enter your University Passing year"
          v-model="formData.universityPassingYear"
        />
        <div v-if="hasError('universityPassingYear')" class="invalid-feedback">
      
          <div class="error" v-if="!$v.formData.universityPassingYear.numeric">
            Should be a valid value.
          </div>
        </div>
        </div>


  
        <div class="form-group">
        <label for="nidNo">National Id Number</label>
        <input
          type="text"
          class="form-control"
          :class="hasError('nidNo') ? 'is-invalid' : ''"
          placeholder="Enter your National Id Number"
          v-model="formData.nidNo"
        />
        <div v-if="hasError('nidNo')" class="invalid-feedback">
        
          <div class="error" v-if="!$v.formData.nidNo.numeric">
            Should be a valid value.
          </div>
        </div>
        </div>


        <div class="form-group">
        <label for="birthCertificateNo">Birth Certificate Number</label>
        <input
          type="text"
          class="form-control"
          :class="hasError('birthCertificateNo') ? 'is-invalid' : ''"
          placeholder="Enter your Birth Certificate Number"
          v-model="formData.birthCertificateNo"
        />
        <div v-if="hasError('birthCertificateNo')" class="invalid-feedback">
       
          <div class="error" v-if="!$v.formData.birthCertificateNo.numeric">
            Should be a valid value.
          </div>
        </div>
        </div>



    
    </tab-content> -->
    <tab-content title="Finishing Up">


     

        <!---company--->
        <div class="form-group">
        <label for="companyName">Your Company Name</label>
        <input
          type="text"
          class="form-control"
          :class="hasError('companyName') ? 'is-invalid' : ''"
          placeholder="Enter your Company / Organization name"
          v-model="formData.companyName"
        />
        <div v-if="hasError('companyName')" class="invalid-feedback">
          <div class="error" v-if="!$v.formData.companyName.required">
            Please provide a valid company name.
          </div>
        </div>
      </div>

     


        <!---company details--->
        <div class="form-group">
        <label for="experieceDetails">Your working details</label>
       
        <textarea class="form-control" :class="hasError('experieceDetails') ? 'is-invalid' : ''" placeholder="Enter your working details" v-model="formData.experieceDetails">

        </textarea>
        <div v-if="hasError('experieceDetails')" class="invalid-feedback">
          <div class="error" v-if="!$v.formData.experieceDetails.required">
            Please provide a valid company name.
          </div>
          
        </div>
      </div>
        

        <!---company experience--->
        <div class="form-group">
        <label for="experienceYear">Your year of experience</label>
        <input
          type="text"
          class="form-control"
          :class="hasError('experienceYear') ? 'is-invalid' : ''"
          placeholder="Enter your year of experience"
          v-model="formData.experienceYear"
        />
        <div v-if="hasError('experienceYear')" class="invalid-feedback">
          <div class="error" v-if="!$v.formData.experienceYear.required">
            Please provide year of experience
          </div>
          <div class="error" v-if="!$v.formData.experienceYear.numeric">
            Should be a valid value.
          </div>
        </div>
      </div>

    </tab-content>
  </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent, ValidationHelper } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
// import { required } from "vuelidate/lib/validators";
// import { email } from "vuelidate/lib/validators";
// import { numeric } from "vuelidate/lib/validators";

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' 
Vue.use(VueAxios, axios)

export default {
  name: "StepFormValidation",
  components: {
    FormWizard,
    TabContent,
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
      validationRules: [
        // { name: { required }, email: { required, email}, phone:{required, numeric} }, 
        // {  sscPassingYear:{ numeric},hscPassingYear:{ numeric}, universityPassingYear:{ numeric}, nidNo:{numeric},
        // birthCertificateNo:{ numeric}, 
        // fatherName:{}, motherName:{}, birthDate:{required},  }, 
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
        console.warn(this.valueItem)
  }
};
</script>
