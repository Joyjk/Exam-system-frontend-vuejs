<template>
    <div>
        <h1>Set and Question mapping </h1>
       
       <div class="container">
           <form method="post" v-on:submit="addMappingQusSet">
            <select class="form-select form-select-lg mb-3" v-model="form.candidateTypeId" style="text-align:center" aria-label=".form-select-lg example">
                        <option value="" >Select Candidate type</option>
                        <option v-for="candiType in  allCandidateTypeList" v-bind:key="candiType.typeId" :value="candiType.typeId">{{candiType.designation}}</option>
                        
                </select>
                <select class="form-select form-select-lg mb-3" v-model="form.sessionId" style="text-align:center" aria-label=".form-select-lg example">
                <option value="" selected>Candidate Session</option>
                <option v-for="sessions in allCandidateSessionList" v-bind:key="sessions.sessionId" :value="sessions.sessionId">{{sessions.sessionString}}</option>
                
                </select>
            
                <div class="container" style="border: 1px solid black">
                        <div class="row">
                            <div class="table-responsive col-md-6">
                                <div class="btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
                        <table class="">
                            <tr>
                                <th>Set</th>
                            </tr>
                            <tr v-for="rdSet in allSetNameList" v-bind:key="rdSet.setNameId">
                                
                                <td>
                                    <input type="radio" v-model="form.setNameId" class="btn-check" :value="rdSet.setNameId" name="btnradio" :id="rdSet.setNameId" autocomplete="off" >
                                    <label class="btn btn-outline-warning" :for="rdSet.setNameId">{{rdSet.setString}}</label>
                                </td>
                            </tr>
                            <!-- <tr>
                                <td>
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                                    <label class="btn btn-outline-warning" for="btnradio2">Beta</label>
                                </td>
                            </tr> -->

                            <!-- <tr>
                                <td>
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                                    <label class="btn btn-outline-warning" for="btnradio3">Gamma</label>
                                </td>
                            </tr> -->
                        </table>
                    </div>
                            </div>
                            <div class="table-responsive col-md-6">
                                <div class="btn-group-vertical" role="group" aria-label="Basic checkbox toggle button group">
                                <table>
                                    <tr>
                                        <th>
                                            Questions
                                        </th>
                                    </tr>
                                    <tr v-for="qus in allQuestionsList" v-bind:key="qus.questionId">
                                        <td>
                                            <input type="checkbox" v-model="form.questionId" :value="qus.questionId" class="btn-check" :id="'qus_'+qus.questionId" >
                                            <label class="btn btn-outline-primary" :for="'qus_'+qus.questionId"> {{qus.question}} </label>
                                        </td>
                                    </tr>
                                    <!-- <tr>
                                        <td>
                                            <input type="checkbox" class="btn-check" id="btncheck198" autocomplete="off">
                                            <label class="btn btn-outline-primary" for="btncheck198"> For faster mobile-friendly development, 
                                                use responsive display classes for showing and hiding elements by device.?</label>
                                        </td>
                                    </tr> -->
                                    <!-- <tr>
                                        <td>
                                            <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
                                            <label class="btn btn-outline-primary" for="btncheck2">This is a long paragraph written to show how the line-height of an element
                                                is affected by our utilities. Classes are applied to the element itself or sometimes the parent element?</label>

                                        </td>
                                        
                                    </tr> -->
                                    <!-- <tr>
                                        <td>

                                            <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
                                            <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
                                        </td>
                                    </tr> -->
                                </table>
                                </div>
                            </div>
                            </div>
                            
                </div>
                <br>
                <select class="form-select form-select-lg mb-3" v-model="form.timeDuration" aria-label=".form-select-lg example">
                    <option value="" selected>Time Duration</option>
                    <option value="50">50 min</option>
                    <option value="20">20 min</option>
                    <option value="30">30 min</option> 
                </select>

                <div class="d-grid gap-2" style="margin-top:2%">
                    <button class="btn btn-primary" type="submit">Submit</button>                
                </div>
            </form>
       </div>
    </div>
</template>
<style scoped>
label{
    color: black;
}
</style>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' 
Vue.use(VueAxios, axios)
export default {
    data(){
        return{
            allCandidateSessionList:undefined,
            allCandidateTypeList:undefined,
            allSetNameList:undefined,
            allQuestionsList:undefined,
            form:{
                setNameId:"",
                questionId:[],
                candidateTypeId:"",
                sessionId:"",
                timeDuration:"",
            }
        }
    },
     async mounted(){
        // Vue.axios.get("https://localhost:44332/api/Questions/GetCandidateSession").then((resp)=>{
        //     this.allCandidateSessionList=JSON.parse(JSON.stringify(resp.data))
        //     //this.questionsDataArray.push((resp.data))
        //     // console.warn(JSON.parse(JSON.stringify( resp.data)))
        //     console.log(this.allCandidateSessionList)
        // })


        // Vue.axios.get("https://localhost:44332/api/Questions/GetAllCandidateType").then((resp)=>{
        //     this.allCandidateTypeList=JSON.parse(JSON.stringify(resp.data))
        //     //this.questionsDataArray.push((resp.data))
        //     // console.warn(JSON.parse(JSON.stringify( resp.data)))
        //     console.log(this.allCandidateTypeList)
        // })
        
        Vue.axios.all([
           await axios.get("https://localhost:44332/api/Questions/GetCandidateSession"),
            await axios.get("https://localhost:44332/api/Questions/GetAllCandidateType"),
            await axios.get("https://localhost:44332/api/Questions/GetAllSetName"),
            await axios.get("https://localhost:44332/api/Questions/getallquestions"),
        ])
        .then((resp)=>{
            //console.log(resp[0].data)
            this.allCandidateSessionList=resp[0].data
            this.allCandidateTypeList = resp[1].data
            this.allSetNameList = resp[2].data
            this.allQuestionsList = resp[3].data
            console.log(resp[3].data)
        }).catch(function(error){
            console.log(error)
        })

        // axios.spread(function(resp1, resp2){
        //     // this.allCandidateSessionList=JSON.parse(JSON.stringify(resp1.data))
        //     // this.allCandidateTypeList=JSON.parse(JSON.stringify(resp2.data))
        //     // console.log(this.allCandidateSessionList);
        //     // console.log(this.allCandidateTypeList)


        //     console.log(resp1.data)
        //     console.log(resp2.data)
        //     // console.log(resp2.data)
            
            
        // })
        

    }, 
    methods:{
        async addMappingQusSet(e){
            e.preventDefault();
            //this.form.questionId = this.form.questionId[1]
            var data = this.form.questionId.length;
            
            var form2 = {
                setNameId : this.form.setNameId,
                candidateTypeId : this.form.candidateTypeId,
                sessionId : this.form.sessionId,
                timeDuration : this.form.timeDuration,
                questionId : undefined
            }

            var questions = [];
            for(let i=0;i<data;i++)
            {
                //this.form.questionId = this.form.questionId[i];
                questions.push(this.form.questionId[i])
            }

            for(var i=0;i<questions.length;i++)
            {
                form2.questionId=questions[i];
                //console.log(form2)

            await axios.post('https://localhost:44332/api/Questions/SetAndQuestionsMapping', form2)
                .then((res)=>{
                //console.log(res.status)
                if(res.status===201)
                {
                    console.log("Success")
                    
                    //this.updateTab(1);
                    //window.location.reload();
                }
                })

               


            }

            
        }
    }
}
</script>