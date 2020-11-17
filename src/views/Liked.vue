<template lang="html">

    <v-row align="center">
      <v-col class="display-3 text-center">
        <LikedList :likedList="likedHistory" />
      </v-col>
    </v-row>
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
