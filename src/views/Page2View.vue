<template>
    <div>
        <h1>This is page 2</h1>
        <button class="btn btn-primary">Click </button>
    </div>
    
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' 
Vue.use(VueAxios, axios)
export default {
    name:"AllData",
    mounted() {
        Vue.axios.get("https://localhost:44332/api/Users").then((resp)=>{
             console.warn(resp.data)
        })
    },

}
</script>