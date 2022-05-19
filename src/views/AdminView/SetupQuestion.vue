<template>
    <div >
        <!-- <pre>{{form}}</pre> -->
        <form method="post"  v-on:submit="addQuestion" enctype="multipart/form-data">
        <div class="container">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Question</label>
                <input type="text" class="form-control" v-model="form.question" id="exampleFormControlInput1" placeholder="">
            </div>
            
            <div class="mb-3" style="display:none">
                <label for="exampleFormControlInput1" class="form-label">Enter Question Picture Attachment</label>
                <input type="file" class="form-control" @change="onFileSelected"  id="exampleFormControlInput1" placeholder="">
            </div>
            
            <div class="mb-3">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" v-model="form.questionType" name="btnradio" id="btnradio1" value="written" autocomplete="off" >
                <label class="btn btn-outline-primary" for="btnradio1">Written</label>

                <input type="radio" class="btn-check" v-model="form.questionType" name="btnradio" id="btnradio2" value="mcq" autocomplete="off">
                <label class="btn btn-outline-primary" for="btnradio2">MCQ</label>

                
                </div>
            </div>
            
            <div class="mb-3"  v-if="form.questionType==='mcq'">
                <label for="exampleFormControlInput1" class="form-label">Enter Option 1</label>
                <input type="text" class="form-control" v-model="form.options.option1" id="exampleFormControlInput1" placeholder="">
            </div>
            
            <div class="mb-3"  v-if="form.questionType==='mcq'">
                <label for="exampleFormControlInput1" class="form-label">Enter Option 2</label>
                <input type="text" class="form-control"  v-model="form.options.option2" id="exampleFormControlInput1" placeholder="">
            </div>
            
            <div class="mb-3"  v-if="form.questionType==='mcq'">
                <label for="exampleFormControlInput1" class="form-label">Enter Option 3</label>
                <input type="text" class="form-control"  v-model="form.options.option3" id="exampleFormControlInput1" placeholder="">
            </div>
            
            <div class="mb-3"  v-if="form.questionType==='mcq'">
                <label for="exampleFormControlInput1" class="form-label">Enter Option 4</label>
                <input type="text" class="form-control"  v-model="form.options.option4" id="exampleFormControlInput1" placeholder="">
            </div>
            
            <div class="mb-3"  v-if="form.questionType==='mcq'">
                <label for="exampleFormControlInput1" class="form-label">Enter Option 5</label>
                <input type="text" class="form-control"  v-model="form.options.option5" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="mb-3"  v-if="form.questionType==='written'">
                <label for="exampleFormControlTextarea1" class="form-label">Sample Written Ans</label>
                <textarea class="form-control" v-model="form.options.writtenAns" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            
            <div class="mb-3"  v-if="form.questionType==='mcq'">
                <label for="exampleFormControlInput1" class="form-label">Correct Ans</label>
                <input type="text" class="form-control" v-model="form.options.correctAns" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Mark</label>
                <input type="number" class="form-control" v-model="form.mark" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="d-grid gap-2">
            <button class="btn btn-primary" type="submit">Add</button>
            
            </div>
        </div>
        </form>
        <br>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' 
import VueUid from 'vue-uid';
// import { uuid } from 'vue-uid';
 //import { v4 as uuidv4 } from "uuid";
 import { v4 as uuidv4 } from "uuid";

Vue.use(VueUid);
Vue.use(VueAxios, axios)
export default {
    name:'SetupQuestion',
    //mixins: [vueUidMixin],
    data(){
        return{
            form:{
                question:null,
                questionType:null,
                questionPicture:null,
                optionId:1,
                
                
                mark:null,
                optionUid: null,
                options:{
                    optionUid: null,
                    writtenAns:null,
                    correctAns:null,
                    option1:null,
                    option2:null,
                    option3:null,
                    option4:null,
                    option5:null,
                }


            }
        }
    },
    methods:{
        onFileSelected(event){
            this.form.questionPicture=event.target.files[0];
        },
        
       

        addQuestion(e){
            e.preventDefault();
            
            const uid = uuidv4();
            this.form.optionUid = uid;
            this.form.options.optionUid = uid;
            this.form.mark= parseInt(this.form.mark);

             this.form.questionPicture="Hello123124"

            // if(this.form.questionPicture!=null)
            // {
            //     const reader = new FileReader()
            //     let rawImg;
            //     reader.onloadend = () => {
            //     rawImg = reader.result;
            //     this.form.questionPicture=rawImg;
            //     }
            //     reader.readAsDataURL(this.form.questionPicture);
            // }
            //this.form.OptionUid = this.$_uid
            
            console.log(this.form)
            //console.log(formData)
            Vue.axios.post('https://localhost:44332/api/Questions', this.form).then((res)=>{
                console.log(res)
            })

        }
    },
      
}
</script>