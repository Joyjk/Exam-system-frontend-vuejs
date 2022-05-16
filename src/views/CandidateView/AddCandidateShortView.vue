
<template>
<div>
   <h3>Welcome</h3>
   <h5>Please enter your information to continue</h5>
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

  </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent, ValidationHelper } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
import { required } from "vuelidate/lib/validators";
import { email } from "vuelidate/lib/validators";
import { numeric } from "vuelidate/lib/validators";

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
      formData: {
        name: "",
        email: null,
        phone:'',
       
      },
      validationRules: [
        { name: { required }, email: { required, email}, phone:{required, numeric} }, //required, numeric
        {    }, //numberOfEmployees: { required, numeric }
        { },
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
       
      }]  

      console.log(data[0])

    //   Vue.axios.post('https://localhost:44332/api/Candidates', data[0]).then((res)=>{
    //             console.log(res)
    //         })

    },
  },
};
</script>
