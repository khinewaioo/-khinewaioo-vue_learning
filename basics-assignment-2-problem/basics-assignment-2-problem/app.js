const app = Vue.createApp({
  data() {
    return {
      output1: "",
      output2: "",
    };
  },
  methods: {
    showAlert(msg) {
      alert(msg);
    },
    onKeyDown(event) {
      this.output1 = event.target.value;
    },
    onKeyEnter(event) {
      this.output2 = event.target.value;
    },
  },
});

app.mount("#assignment");
