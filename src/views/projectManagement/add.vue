<template>
    <div>
        <div class="box">
            <div class="box-left">
                <div class="steps">
                    <Steps />
                </div>
                <div class="form">

                </div>
            </div>
            <div class="box-right">
                <div class="files">
                    <div class="title">附件</div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import Steps from '@/components/steps.vue'
export default{
    components:{Steps},
    data(){
        return{
            
        }
    },
    
    mounted(){

    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    .box-left{
        
    }
}
</style>