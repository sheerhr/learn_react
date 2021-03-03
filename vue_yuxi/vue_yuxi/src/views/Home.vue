<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-if="isLogin">
      <h1>
        美军空袭叙利亚了
      </h1>
    </div>
    <div>
      <button @click="toggle" type="middle">
        {{showValue}}
      </button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
      return {
          // isLogin : this.$store.state.isLogin
          showValue:"登录"
      }
  },
  name: 'Home',
  components: {
    // HelloWorld
  },
  computed: mapState({
      // 箭头函数可使代码更简练
      isLogin: state => console.log(state),

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
  }),
  methods: {
    toggle (state) {
      if(this.showValue == "登录") {
        this.showValue = "登出";
        this.$store.commit('login');
      }else {
        this.showValue = "登录";
        this.$store.commit('logOut');
      }
    }
  },
}
</script>
