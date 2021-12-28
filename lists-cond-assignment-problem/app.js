const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      buttonState: true,
      btnMsg: "Hide List",
    };
  },
  watch: {
    buttonState() {
      if (!this.buttonState) {
        return this.btnMsg = "Show List";
      }
      return this.btnMsg = "Hide List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    toggleList() {
      this.buttonState = !this.buttonState;
    },
  },
});

app.mount("#assignment");

//よいお年をお迎えください。　-> 
// ありがとうございました。


// あげましておめでとうございます.

