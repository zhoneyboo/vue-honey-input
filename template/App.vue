<template>
    <div>
        <VueHoneyInput type="password" password="alphanumeric" min="5" max="20"></VueHoneyInput>
        <VueHoneyInput type="password" password="alphanumeric_camelcase" min="5" max="20"></VueHoneyInput>
        <VueHoneyInput type="password" password="alphanumeric_specialcharacter" min="5" max="20"></VueHoneyInput>
        <VueHoneyInput type="password" password="alphanumeric_specialcharacter_camelcase" min="5" max="20"></VueHoneyInput>
    </div>
</template>
<script>
import VueHoneyInput from './vue-honey-input.vue';
export default {
    components:{
        VueHoneyInput
    },
}
</script>