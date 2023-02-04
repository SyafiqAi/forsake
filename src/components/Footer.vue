<template>
  <div id="footer">
    <div class="copyright">
      &copy; Syafiq 2023 
      <br />
      Thank you Mason.
      <br />
      V 1.4.1
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #footer {
        background-color: v-bind('$darkDarkBlue');
        /* background-color: black; */
        color: rgb(92, 92, 92);
        width: 100%;
        min-height: 75px;
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