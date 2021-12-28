const app = Vue.createApp({
  data() {
    return {
      className: "",
      pStyle: false,
      displayClass: "",
    };
  },
  watch: {
    className() {},
  },
  computed: {},
  methods: {
    toggleParagraph() {
      this.pStyle = !this.pStyle;
      if (this.pStyle) {
        return (this.displayClass = "visible");
      }
      return (this.displayClass = "hidden");
    },
  },
});
app.mount("#assignment");
