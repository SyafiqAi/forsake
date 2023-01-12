<template>
  <div id="footer">
    <div class="copyright">
      &copy; Syafiq 2023 
      <br /><br />
      Thank you Mason.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #footer {
        background-color: v-bind('$boldGreen');
        color: white;
        width: 100%;
        min-height: 10vh;
        margin-top: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .copyright {
        text-align: center;
        overflow: hidden;
    }
</style>