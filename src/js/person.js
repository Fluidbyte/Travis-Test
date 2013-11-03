/**
 * Constructs place object
 * @constructor person
 * @param {string} name - The name of the person
 */
var person = function (name) {
    this.name = name;
};

/**
 * Returns the name of the person
 * @method sayName
 * @returns {string} - Compiled string denoting the person's name
 */
person.prototype.sayName = function () {
    return "My name is " + this.name;
};