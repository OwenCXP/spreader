<template>
  <div class="hello">
    <div class="top">
      <img src="../assets/top_03.jpg">
      <h1>{{ msg }}</h1>
    </div>
    <div>
      <p class="P_title p_height">{{title_1}}</p>
      <p class="P_title p_height">{{title_2}}</p>
      <p class="P_title">{{title_3}}</p>
    </div>
    <div class="images">
      <img src="../assets/title_1.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '2018',
      title_1: 'Most',
      title_2: 'Attractive',
      title_3: 'Employer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
    margin-top: 8rem;
    height: 6rem;
}
h1{
  font-weight: bold;
  color: #fff;
  font-size: 2rem;
  position: relative;
  top: -7.5rem;
}
.P_title{
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
}
.p_height{
  height: 1px;
}
.images{
}
</style>
