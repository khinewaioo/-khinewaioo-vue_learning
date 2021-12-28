const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) this.counter = 0;
    },
  },
  computed: {
    fullName() {
      if (this.firstName === "" || this.lastName === "") {
        return "";
      }
      return this.firstName + " " + this.lastName;
    },
  },
  methods: {
    resetName() {
      this.firstName = "";
      this.lastName = "";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
  },
});

app.mount("#events");
