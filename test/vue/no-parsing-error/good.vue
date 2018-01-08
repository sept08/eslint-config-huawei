<template>
  <div class='container'
       @click='open = !open'
  >
    {{ message }}
  </div>
</template>
<script>
export default {
  /**
   * vue data object
   * @returns {{message: number}} data
   */
  data() {
    return {
      message: 1,
      open: true
    }
  }
}
</script>
