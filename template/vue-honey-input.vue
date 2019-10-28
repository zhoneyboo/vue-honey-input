<template>
    <div>
        <input :type="inputType" v-model="value">
        <small>{{validate}}</small>
    </div>
</template>
<script>
import input from './validator.js';
export default {
    props: ["type", 'password', 'min', 'max'],
    computed: {
        inputType: function(){
            return typeof this.type === "undefined" ? "text" : this.type;
        },
        validate: function(){
            let options = {
                min: typeof this.min === "undefined" ? 0 : this.min,
                max: typeof this.max === "undefined" ? 255 : this.max,
                password_type: typeof this.password === "undefined" ? "" : this.password
            }
            return typeof this.value === "undefined" || this.value == "" ? "" : input.validate(this.inputType, this.value, options); 
        },
        ValidateErrorMessage: function(){
            return input.message;
        }
    },
    data() {
        return {
            value: ""
        }
    },
}
</script>