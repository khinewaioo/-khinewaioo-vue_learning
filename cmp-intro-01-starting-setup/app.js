const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorez",
          phone: "11111",
          email: "manuel@local",
        },
        {
          id: "jone",
          name: "Jone Lorez",
          phone: "11111",
          email: "jone@local",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">{{detailVisible? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailVisible">
      <li><strong>Phone:</strong>{{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
    `,
  data() {
    return {
      detailVisible: false,
      friend:{
        id: "jone",
        name: "Jone Lorez",
        phone: "11111",
        email: "jone@local"
      }
    };
  },
  methods: {
    toggleDetails() {
      this.detailVisible = !this.detailVisible;
    },
  },
});
app.mount("#app");
