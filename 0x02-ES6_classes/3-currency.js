export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  /* ==== Getter Method of Attributes === */
  get name() {
    return this._name;
  }
  get code() {
    return this._code;
  }

  /* ==== Setter Method of Attributes === */
  set name(val) {
    this._name = val;
  }

  set code(val) {
    this._code = val;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
