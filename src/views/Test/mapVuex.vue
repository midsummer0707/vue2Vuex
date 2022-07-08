<!-- vuex 辅助函数 -->
<template>
  <div>
    <el-tag>{{ firstBook }}</el-tag> | <el-tag>{{ secondBook }}</el-tag>
    <el-divider></el-divider>
    <el-tag type="danger">{{ getBoosAll }}</el-tag>
    <el-divider></el-divider>
    <el-button type="info" @click="handleFirstBook(firstBook)"
      >辅助函数Mutation</el-button
    >
    <el-button type="danger" @click="setBookAction(secondBook)"
      >辅助函数Action</el-button
    >
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["firstBook", "secondBook"]),
    ...mapGetters(["getBoosAll"])
  },
  methods: {
    ...mapMutations(["handleFirstBook"]),
    ...mapActions(["setBookAction"])
  }
};
</script>

<style  scoped>
</style>
