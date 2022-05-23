<template>
    <div>
        <div class="setName">
            <form method="post" v-on:submit="addSetString">
                <div class="mb-3">
                    <label for="exampleInputtypeId" class="form-label">Enter Designation</label>
                    <input type="text" class="form-control" id="exampleInputtypeId" v-model="form.designation" >
                </div>
                
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <br>
        <br>
        <div class="setName">
            
            <table border="1" class="table table-striped">
            <thead>
                <tr>
                <th>#</th>
                <th>Set String</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in allData" v-bind:key="item.typeId">
                <td>{{item.typeId}}</td>
                <td>{{item.designation}}</td>
                </tr>
            </tbody>
            
            </table>
        </div>
    </div>
</template>
<style scoped>
.setName{
    margin-left: 35%;
    margin-right: 35%;
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
            form:{
                designation:''
            },
            allData:undefined
        }
    }, 
    methods:{
        addSetString(e){
            e.preventDefault();
            var data =  JSON.parse(JSON.stringify(this.form))
            //console.log(data)
             Vue.axios.post('https://localhost:44332/api/Questions/AddCandidateType', data).then((res)=>{
                //console.log(res.status)
                if(res.status===201)
                {
                    console.log("Success")
                    
                   
                    window.location.reload();
                }
            })
        }
    },
    mounted(){
        Vue.axios.get("https://localhost:44332/api/Questions/GetAllCandidateType").then((resp)=>{
            this.allData=JSON.parse(JSON.stringify(resp.data))
            //this.questionsDataArray.push((resp.data))
            // console.warn(JSON.parse(JSON.stringify( resp.data)))
            console.log(this.allData)
        })
    }
}
</script>