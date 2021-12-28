const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    setConfirmName() {
      this.confirmName = this.name;
    },
    incrementCounter(num) {
      this.counter = this.counter + num;
    },
    decrementCounter(num) {
      this.counter = this.counter - 5;
    },
    submitForm() {
      alert("dkfjkd");
    },
  },
});

app.mount("#events");
