
import useValidate from '@vuelidate/core'
import { required ,email,minLength,sameAs,helpers} from '@vuelidate/validators'
import {reactive,computed} from 'vue'
import axios from "axios";
import Input from '@/components/Input/TextInput.vue';
export default{
    
    components:{
        Input
    },
    setup(){
        const state=reactive({
            fname:'',
            lname:'',
            email:'',
            password:{
                password:'',
                confirm:'',
            },
        })
        const mustBeLearnVue=(value)=>value.includes('learnvue')
        const rules = computed(()=>{
            return {
                fname:{required},
                lname:{required},
                email:{
                required,
                email,
            mustBeLearnVue:helpers.withMessage(
                'Must be learnvue',
                mustBeLearnVue
            ),
                },
                password:{
                password:{required , minLength:minLength(6)},
                confirm:{required , sameAs:sameAs(state.password.password)
                },
            },
            }
        })
        const v$=useValidate(rules,state)
        return {
            state,
            v$,
        }
    },
    methods:{
        submitForm(){
            

            this.v$.$validate()
            
                let data={
                    firstName:this.state.fname,
                    lastName:this.state.lname,
                    email:this.state.email,
                    service:"active",
                    password:this.state.password.confirm
                    
                };
                axios.post("http://localhost:3200/register",data).then((res)=>{
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
        
    }
}
}
