class Nominalunik {
  async nominalunik() {
    const rand = Math.floor(Math.random() * 999) + 1000;

    const subnominal = nominal.slice(0, -4);
    const nomunik = subnominal + rand;

    return nomunik;
  }
}
