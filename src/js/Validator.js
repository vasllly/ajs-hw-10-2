export default class Validator {
  constructor() {
    this.trueRules = [/^[а-яёa-z -]+$/i];
    this.falseRules = [/ {2,}/, /^ /, / $/];
  }

  validateUsername(name) {
    const trueRules = this.trueRules.filter(rule => name.search(rule) !== -1);
    const falseRules = this.falseRules.filter(rule => name.search(rule) !== -1);
    return trueRules.length === this.trueRules.length && falseRules.length === 0;
  }
}
