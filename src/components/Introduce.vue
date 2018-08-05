<template>
  <div >
    <img class="backg" src="../assets/background_03.png">
    <p>{{sexSelect}}</p>
    <div class="gender-image">
      <div class="blank"></div>
      <div class="blank"></div>
      <div >
        <img v-if="isMale" src="../assets/male.png" class="gender" @click='changeGender("male")'>
        <img v-else src="../assets/male_unchecked.png" class="gender" @click='changeGender("male")'>
      </div>
      <div class="blank"></div>
      <div>
        <img v-if="isFemale" src="../assets/female.png" class="gender" @click='changeGender("female")'>
        <img v-else src="../assets/female_unchecked.png" class="gender" @click='changeGender("female")'>
      </div>
      <div class="blank"></div>
      <div class="blank"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Introduce',
  data () {
    return {
      sexSelect: '性格选择',
      isMale: false,
      isFemale: false
    }
  },
  methods: {
    changeGender (gender) {
      if (gender === 'male') {
        this.isFemale = this.isMale
        this.isMale = !this.isMale
      } else {
        this.isMale = this.isFemale
        this.isFemale = !this.isFemale
      }
    }
  }
}
</script>
<style lang="scss">
  .backg {
    width: 89%;
    padding-top: 1.6rem;
  }
  p{
    margin-top: -121%;
    font-size: 16px;
    color: #44403f;
    font-weight: bold;
  }
  .gender-image{
    display: flex;
    margin-top: 4%;
  }
  .blank{
    flex-grow: 1;
  }
  .gender{
    flex-grow: 3;
    width: 6rem;
  }
</style>
