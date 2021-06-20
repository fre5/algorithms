const hash = {
  res: "",
  ALPHABET: "0123456789abcdefghijklmnopqrstuvwxyz",
  randomGen(mult) {
    return Math.floor(Math.random() * mult);
  },
  gen() {
    while (this.res.length <= 64) {
      let seed = this.ALPHABET[this.randomGen(36)];
      seed = this.randomGen(2) === 1 ? seed.toLowerCase() : seed.toUpperCase();
      this.res += seed;
    }
    return this.res;
  }
}

console.log(hash.gen());
