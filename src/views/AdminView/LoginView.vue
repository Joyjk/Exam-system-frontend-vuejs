<template>
  <div>
    <h3>Login</h3>
    <div class="" style="margin-left:30%; margin-right:30%;">
        <div class="">
            <!-- <ul>
                <li v-for="item in error" v-bind:key="item">
                    {{item}}
                </li>
            </ul> -->
      <form method="post" v-on:submit="addUser"> 
        
        <input type="text" class="form-control" v-model="form.email" placeholder="Enter email" ref="email">
        
        <input type="text" class="form-control" v-model="form.password" placeholder="Enter password" ref="password">
       
            <!-- <button type="submit" class="btn btn-dark">Add</button> -->
            <div class="d-grid gap-2" style="margin-top:1%">
                <button class="btn btn-dark" type="submit">Sign up</button>
            </div>
      </form>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' 
Vue.use(VueAxios, axios)
export default {
    name:'Add-user',
    data(){
        return{
            form: {
                
                email:'',
               
                password:''
            },
            error:[],
            count:0
        }
    },
    methods:{
        addUser(e){
            e.preventDefault();
            this.count = 0;
            this.error = []
            for(const item in this.form){
                // console.log(this.form[item])
                if(this.form[item]===''||this.form[item].length===0){
                    this.error.push("Empty submited")
                    this.count++;
                }
            }
            //console.log(this.form)
            // if(this.count==0){
            //      Vue.axios.post('https://localhost:44332/api/Users', this.form).then((res)=>{
            //         console.log(res)
            //     })
            // }



            console.log(this.form)
            // Vue.axios.post('https://localhost:44332/api/Users', this.form).then((res)=>{
            //     console.log(res)
            // })
        }
    }
}
</script>