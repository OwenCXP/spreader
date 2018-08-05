<template>
  <div class="backg">
    <img src="../assets/border.png">
    <p>{{sexSelect}}</p>
    <div>
      <img src="../assets/male01.png" class="male">
      <img src="../assets/male02.png" class="male">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Introduce',
  data () {
    return {
      sexSelect: '性格选择'
    }
  }
}
</script>
<style lang="scss">
  .backg img{
    width: 89%;
    padding-top: 1.6rem;
  }
  p{
    margin-top: -29rem;
    font-size: 16px;
    color: #44403f;
    font-weight: bold;
  }
  .male{
    width: 18%;
  }
</style>
