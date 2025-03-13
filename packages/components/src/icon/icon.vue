<template>
  <div class="fq-icon" :class="iconStyle">Icon</div>
</template>

<script lang="ts" setup>
import './style/index.less'
import { computed } from 'vue'

defineOptions({ name: 'fq-icon' })

type IconProps = {
  type?: string
}
const iconProps = defineProps<IconProps>()

const iconStyle = computed(() => {
  return { [`fq-icon--${iconProps.type}`]: iconProps.type }
})
</script>