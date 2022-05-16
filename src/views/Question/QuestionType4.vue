
<template>
<div>
   <h3>Welcome</h3>
   <h5>Please answer all the question given below</h5>
  <form-wizard @onComplete="onComplete">
    <tab-content title="About You" :selected="true">
      
      <div class="form-group">
        <label for="name">Full Name</label>
        <input
          type="text"
          class="form-control"
          :class="hasError('name') ? 'is-invalid' : ''"
          placeholder="Enter your name"
          v-model="formData.name"
        />
        <div v-if="hasError('name')" class="invalid-feedback">
          <div class="error" v-if="!$v.formData.name.required">
            Please provide a valid name.
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="email">Your Email</label>
        <input
          type="email"
          class="form-control"
          :class="hasError('email') ? 'is-invalid' : ''"
          placeholder="Enter your email"
          v-model="formData.email"
        />
        <div v-if="hasError('email')" class="invalid-feedback">
          <div class="error" v-if="!$v.formData.email.required">
            Email field is required
          </div>
          <div class="error" v-if="!$v.formData.email.email">
            Should be in email format
          </div>
        </div>
      </div>
      <!---Enter Phone--->
      <div class="form-group">
        <label for="phone">Your Phone</label>
        <input
          type="text"
          class="form-control"
          :class="hasError('phone') ? 'is-invalid' : ''"
          placeholder="Enter your phone number"
          v-model="formData.phone"
        />
        <div v-if="hasError('phone')" class="invalid-feedback">
          <div class="error" v-if="!$v.formData.phone.required">
            Phone number field is required
          </div>
          <div class="error" v-if="!$v.formData.phone.numeric">
            Should be in Numaric
          </div>
        </div>
      </div>


    </tab-content>
    <tab-content title="About your other details">
      

        <!---Father Name-->

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

        <!---Mother Name-->

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

        <!---BirthDate-->

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

        <!---SSC-->

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
            <!-- Please Enter your SSC Passing year. -->
          </div>
          <div class="error" v-if="!$v.formData.sscPassingYear.numeric">
            Should be a valid value.
          </div>
        </div>
        </div>

         <!---HSC-->

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
          <!-- <div class="error" v-if="!$v.formData.hscPassingYear.required">
            Please Enter your HSC Passing year.
          </div> -->
          <div class="error" v-if="!$v.formData.hscPassingYear.numeric">
            Should be a valid value.
          </div>
        </div>
        </div>

        <!---University-->

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
          <!-- <div class="error" v-if="!$v.formData.universityPassingYear.required">
            Please Enter your University Passing year.
          </div> -->
          <div class="error" v-if="!$v.formData.universityPassingYear.numeric">
            Should be a valid value.
          </div>
        </div>
        </div>


         <!---NID-->

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
          <!-- <div class="error" v-if="!$v.formData.nidNo.required">
            Please Enter your National Id Number.
          </div> -->
          <div class="error" v-if="!$v.formData.nidNo.numeric">
            Should be a valid value.
          </div>
        </div>
        </div>

        <!---Birth Certificate no-->

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
          <!-- <div class="error" v-if="!$v.formData.birthCertificateNo.required">
            Please Enter your Birth Certificate Number.
          </div> -->
          <div class="error" v-if="!$v.formData.birthCertificateNo.numeric">
            Should be a valid value.
          </div>
        </div>
        </div>



      <!-- <div class="form-group">
        <label for="numberOfEmployees">Number of Employees</label>
        <input
          type="text"
          class="form-control"
          :class="hasError('numberOfEmployees') ? 'is-invalid' : ''"
          placeholder="Enter Total Number of Employees"
          v-model="formData.numberOfEmployees"
        />
        <div v-if="hasError('numberOfEmployees')" class="invalid-feedback">
          <div class="error" v-if="!$v.formData.numberOfEmployees.required">
            Please provide number of employees in your company.
          </div>
          <div class="error" v-if="!$v.formData.numberOfEmployees.numeric">
            Should be a valid value.
          </div>
        </div>
      </div> -->
    </tab-content>
    <tab-content title="Question 1">
      

        <Qus1 />



    </tab-content>

    <tab-content title="Question 2">
      

        <Qus2 />



    </tab-content>

        <tab-content title="Question 3">
      

        <Qus3 />



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
import Qus1 from '../Question/QuestionType1.vue'
import Qus2 from '../Question/QuestionType2.vue'
import Qus3 from '../Question/QuestionType3.vue'

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
    Qus2,
    Qus3,
  },
  mixins: [ValidationHelper],
  data() {
    return {
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
};
</script>
