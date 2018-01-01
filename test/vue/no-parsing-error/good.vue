<template>
  <div class='container'>
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
      message: 1
    }
  }
}
</script>
