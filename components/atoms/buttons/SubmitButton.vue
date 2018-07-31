<template>
  <button @click="onClick"><slot /></button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>
