<template>
    <div class="form-group">
        <input
                :type="type"
                class="form-control form-control-lg"
                :placeholder="placeholder"
                :name="name"
                :value="value"
                :disabled="disabled"
                :class="{'is-invalid':error}"
                @input="$emit('input',$event.target.value)" >
        <div class="invalid-feedback" v-if="error">{{error}}</div>
        <small v-if="info" className="form-text text-muted">{{info}}</small>
    </div>
</template>

<script>
    export default {
        name: "TextFieldGroup",
        props:{
            type:{
                type:String,
                default:'text'
            },
            value:String,
            placeholder:String,
            name:String,
            error:String,
            info:String,
            disabled:Boolean
        },
    }
</script>

<style scoped>

</style>