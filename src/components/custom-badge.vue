<template>
   <el-input-number 
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
  ></el-input-number>
</template>

<script>

import { FormMixin } from '@vueblocks/element-schema-form'

export default {
  name: 'CustomBadge',
  mixins: [FormMixin]
}

</script>

<style scoped>

</style>