<template>
    <div>
        <span>111</span>
    </div>
</template>


<script>
export default {
    data() {
        return {

        }
    },
    // beforeRouteLeave(to, from, next) {
    //     console.log('111111')
    //     next();
    // },
    mounted(){
        console.log(this.$route)
    },
    methods: {

    }
}
</script>