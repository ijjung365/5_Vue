<template lang="">
  <div>
    <InputPopName @inputCompleted='changeHandler'></InputPopName>
  </div>
  <h3>수신 결과 : {{popName}}</h3>
</template>
<script>
import InputPopName from './components/InputPopName2.vue'
export default {
  name : 'App',
  components : {InputPopName},
  data() {
    return {
      popName : ''
    }
  },
  methods: {
    changeHandler(e){
      this.popName = e.name;
      console.log(e);
    }
  },
}
</script>
<style lang="">
  
</style>