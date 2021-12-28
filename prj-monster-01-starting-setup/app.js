function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      isGameOver: false,
      winner: null,
      logMessages :[]
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
    },
    attackMonster() {
      this.currentRound++;
      const attackVal = getRandomValue(5, 12);
      this.monsterHealth = this.monsterHealth - attackVal;
      this.addLogMessage('player','attack', attackVal);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackVal = getRandomValue(8, 12);
      this.playerHealth = this.playerHealth - attackVal;
      this.addLogMessage('monster','attack', attackVal);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackVal = getRandomValue(10, 25);
      this.monsterHealth = this.monsterHealth - attackVal;
      this.addLogMessage('player','special attack', attackVal);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healVal = getRandomValue(8, 20);
      if (this.playerHealth + healVal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth = this.playerHealth + healVal;
      }
      this.addLogMessage('player','heal', healVal);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
          actionBy: who,
          actionType: what,
          actionValue: value
      });
    },
  },
});

app.mount("#game");
