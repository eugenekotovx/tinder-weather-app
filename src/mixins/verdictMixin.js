const verdict = {
  methods: {
    verdict(weather) {
      this.$store.dispatch("nextWeather", weather)
      setTimeout(() => {
        this.$store.dispatch("refreshVerdict")
      }, 700)
    }
  }
}

export default verdict
