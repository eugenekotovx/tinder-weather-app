<template lang="html">
  <LikedList :likedList="likedHistory" />
</template>

<script>
import LikedList from "@/components/LikedList";
import { mapState } from "vuex";
export default {
  components: {
    LikedList
  },
  computed: {
    ...mapState(["likedHistory"])
  }
};
</script>

<style lang="css" scoped></style>
