<template>
  <div class="home">
    <HelloWorld :msg="massage" />
    <el-button type="primary" @click="$router.push('/test')">
      调整测试页
    </el-button>

    <el-button type="danger" @click="$router.push('/test-other')">
      辅助函数更好用
    </el-button>

    <el-button type="warning" @click="$router.push('/game')">
      游戏开始了
    </el-button>
  </div>
</template>

<script>
import route from "vue-router";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      massage: "2022年 7月 6 日"
    };
  }
};
</script>
