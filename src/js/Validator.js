export default class Validator {
  constructor() {
    this.trueRules = [/^[а-яёa-z ]+$/i];
    this.falseRules = [/ {2,}/, /^ /, / $/];
    this.rules = [...this.trueRules, ...this.falseRules];
  }

  validateUsername(name) {
    const trueRules = this.rules.filter(rule => name.search(rule) !== -1);
    return trueRules.length === this.trueRules.length;
  }
}
