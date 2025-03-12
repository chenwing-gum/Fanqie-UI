<template>
  <button class="fq-button" :class="buttonStyle">测试按钮</button>
</template>

<!-- 
  低版本vue使用
  想使用set up语法需要引入 unplugin-vue-define-options插件 
 -->
<!-- <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'fq-button',
  setup() {
    return {}
  }
})
</script> -->

<!-- vue3.3版本以上使用 -->
<script lang="ts" setup>
import './style/index.less'
import { computed } from 'vue'

defineOptions({ name: 'fq-button' })

type ButtonProps = {
  type?: string
}
const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
  return { [`fq-button--${buttonProps.type}`]: buttonProps.type }
})
</script>
