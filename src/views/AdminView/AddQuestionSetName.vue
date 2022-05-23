<template>
    <div>
        <div class="setName">
            <form method="post" v-on:submit="addSetString">
                <div class="mb-3">
                    <label for="exampleInputsetString" class="form-label">Enter an unique set string</label>
                    <input type="text" class="form-control" id="exampleInputsetString" v-model="form.setString" >
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
                <tr v-for="item in allData" v-bind:key="item.setNameId">
                <td>{{item.setNameId}}</td>
                <td>{{item.setString}}</td>
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
                setString:''
            },
            allData:undefined
        }
    }, 
    methods:{
        addSetString(e){
            e.preventDefault();
            var data =  JSON.parse(JSON.stringify(this.form))
            console.log(data)
             Vue.axios.post('https://localhost:44332/api/Questions/AddSetName', data).then((res)=>{
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
        Vue.axios.get("https://localhost:44332/api/Questions/GetAllSetName").then((resp)=>{
            this.allData=JSON.parse(JSON.stringify(resp.data))
            //this.questionsDataArray.push((resp.data))
            // console.warn(JSON.parse(JSON.stringify( resp.data)))
            console.log(this.allData)
        })
    }
}
</script>