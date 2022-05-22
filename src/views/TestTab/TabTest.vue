<template>
  <div>
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs v-model="tabIndex" small card >
        <b-tab style="display:hidden; " title="Question " v-for="item in  questionsData" v-bind:key="item.questionId">
            <QuestionTab :questionData="item" :updateTab="updateTabIndex" /> 
             <!-- :updateTab="updateTabIndex" -->
        </b-tab>
        <!-- <b-tab title="Edit profile">
          <QuestionTab/>
          
        </b-tab> -->
        <!-- <b-card>I'm the card in tab</b-card> -->
        <!-- <b-tab title="Premium Plan" disabled>Sibzamini!</b-tab> -->
        <!-- <b-tab title="Info">
            <QuestionTab/>
        </b-tab> -->
      </b-tabs>
    </b-card>

    <!-- Control buttons-->
    <div class="text-center">
      <!-- <b-button-group class="mt-2">
        <b-button @click="tabIndex--">Previous</b-button>
        <b-button @click="tabIndex++">Next</b-button>
      </b-button-group> -->

      <div class="text-muted">Current Tab: {{ tabIndex }}</div>
    </div>
  </div>
</template>

<script>
// import QuestionTab from '../TestTab/Questions.vue'
// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios' 
// Vue.use(VueAxios, axios)
//   export default {
      
//     data() {
//       return {
//         tabIndex: 0,
//         questionsData:undefined,
//         questionsDataArray:[]
//       }
//     },
//     components:{
//         QuestionTab
//     },
//     mounted(){
//         Vue.axios.get("https://localhost:44332/api/Questions").then((resp)=>{
//             this.questionsData=resp.data
//             this.questionsDataArray.push((resp.data))
//              //console.warn(JSON.parse(JSON.stringify( resp.data)))
            
//         })

//          console.warn(this.questionsData)
//         // for (let index = 1; index <= this.questionsData.length; index++) {
//         //   this.valueItem.id=index;
//         //   this.valueItem.data=this.questionsData[index]
          
//         //  }
//         // console.warn(this.valueItem)
//         //console.warn(this.questionsData)
//     }
//   }
</script>

<style>
#__BVID__22__BV_tab_controls_{
  display: none;
}
.nav-item{
  display: none;
}
</style>



<script>
import QuestionTab from '../TestTab/Questions.vue'
import { FormWizard, TabContent, ValidationHelper } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
// import { required } from "vuelidate/lib/validators";
// import { email } from "vuelidate/lib/validators";
// import { numeric } from "vuelidate/lib/validators";
//import Qus1 from '../Question/QuestionType1.vue'
// import Qus2 from '../Question/QuestionType2.vue'
// import Qus3 from '../Question/QuestionType3.vue'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' 
Vue.use(VueAxios, axios)

export default {
  name: "StepFormValidation",
//   components: {
//     FormWizard,
//     TabContent,
//     //Qus1,
//     // Qus2,
//     // Qus3,
//   },
  mixins: [ValidationHelper],
  data() {
    return {
       questionsData:undefined,
       questionsDataArray:[],
        tabIndex: 0,
  
      
    };
  },
  methods: {
    onComplete() {
      //alert("Submitting Form ! Rock On");
      const data =[{
        //   name: this.formData.name,
        // email: this.formData.email,
        // phone: this.formData.phone,
        // birthDate:this.formData.birthDate,
        // sscPassingYear: parseInt(this.formData.sscPassingYear),
        // hscPassingYear: parseInt(this.formData.hscPassingYear),
        // universityPassingYear: parseInt(this.formData.universityPassingYear),
        // nidNo: this.formData.nidNo,
        // birthCertificateNo:this.formData.birthCertificateNo,
        // companyName: this.formData.companyName,
        // experieceDetails: this.formData.experieceDetails,
        // fatherName: this.formData.fatherName,
        // motherName: this.formData.motherName,
        // //numberOfEmployees: this.formData.numberOfEmployees,
        // experienceYear:parseInt(this.formData.experienceYear),
        
      }]  

      console.log(data[0])


    },
    updateTabIndex(index){
        this.tabIndex+=index;
    }
  },
  mounted(){
    

      Vue.axios.get("https://localhost:44332/api/Questions").then((resp)=>{
            this.questionsData=JSON.parse(JSON.stringify(resp.data))
            this.questionsDataArray.push((resp.data))
             console.warn(JSON.parse(JSON.stringify( resp.data)))
        })


      
       // console.warn(this.valueItem)
  },
  components:{
        QuestionTab
    },

};
</script>