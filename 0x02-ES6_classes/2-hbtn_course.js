export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /* ==== Implement get method for attributes ==== */
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  /* ==== Implement set method for attributes ==== */
  set name(val) {
    if (typeof val !== 'string') throw new TypeError('Name must be a string');
    this._name = val;
  }

  set length(val) {
    if (typeof val !== 'number') throw new TypeError('Length must be a number');
    this._length = val;
  }

  set students(val) {
    if (!Array.isArray(val)) throw new TypeError('Students must be an array');
    this._students = val;
  }
}
