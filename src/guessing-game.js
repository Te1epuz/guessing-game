class GuessingGame {
    constructor() {}
    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
    guess() {
      let value = Math.round((this.max - this.min) / 2 + this.min);
      return value;
    }
    lower() {
      this.max = Math.round((this.max - this.min) / 2 + this.min);
    }
    greater() {
      this.min = Math.round((this.max - this.min) / 2 + this.min);
    }
}

module.exports = GuessingGame;