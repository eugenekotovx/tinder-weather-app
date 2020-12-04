const lastVerdictMixin = {
  computed: {
    checkTheLastVerdict() {
      if (this.$store.state.lastVerdict === true) {
        return "weather--true";
      }
      if (this.$store.state.lastVerdict === false) {
        return "weather--false";
      } else {
        return "weather";
      }
    }
  }
};

export default lastVerdictMixin;
