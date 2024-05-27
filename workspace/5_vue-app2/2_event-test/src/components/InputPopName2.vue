<template lang="">
    <div>
        노래제목 : <input type='text' v-model='name'>
        <button @click = "checkName()">이벤트 발신</button>
    </div>
</template>
<script>
export default {
    name : 'InputPopName',
    data() {
        return {
            name : ''
        }
    },
    methods: {
        checkName(){
            const checkType = typeof this.name === 'string';
            const checkLen = this.name.trim().length >= 2;
            if(this.name&&checkType&&checkLen) {
                this.$emit('inputCompleted', {name: this.name});
            } else {
                alert('두글자이상입력');
            }
        }
    },
}
</script>
<style lang="">
    
</style>