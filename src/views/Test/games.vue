<!--  -->
<template>
  <div>
    <h1>{{ game }}-{{ gamesname }}</h1>
    <el-tag >getter-{{ getterName }}</el-tag>

    <el-tag type="danger">{{ content }}</el-tag>

    <el-divider></el-divider>
    <el-button @click="handleMutation" v-waves>提交Mutation</el-button>
    <el-button @click="handleMutationSecond" v-waves type="primary"
      >第二次提交Mutation</el-button
    >

    <el-button @click="doAction" type="info" v-waves>战斗打响</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gamesname: "终章,夜的降临"
    };
  },
  computed: {
    game: function() {
      return this.$store.state.game;
    },
    getterName: function() {
      return this.$store.getters.getGamesName;
    },
    content: function() {
      return this.$store.getters.getContent;
    }
  },
  methods: {
    handleMutation() {
      this.$store.commit({
        type: "setMyGames",
        newSetName: "生化危机,第一章, 在一片寂静的庄园,她手持双枪,走向了教堂"
      });
    },

    handleMutationSecond() {
      this.$store.commit({
        type: "setSecondGame",
        changeContent: "场景变化了,沙漠中,干燥的气候没有一丝丝水蒸气!"
      });
    },
    doAction() {
      this.$store.dispatch({
        type: "setStoryAction",
        changeContent: "人族和无生命迹象的丧失进行一场生死较量."
      });
    }
  }
};
</script>

<style  scoped>
</style>
