/*!
 APP, Build version: 0.0.1, 10-30-2013
*/
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
/**
 * Constructs place object
 * @constructor place
 * @param {string} title - The name of the place
 */
var place = function (title) {
    this.title = title;
};

/**
 * Returns the name of the place you would like to visit
 * @method sayWhere
 * @returns {string} - Compiled string denoting where you would like to visit
 */
place.prototype.sayWhere = function () {
    return "I would like to visit " + this.title;
};
/**
 * Constructs thing object
 * @constructor thing
 * @param {string} title - The name of the thing
 */
var thing = function (title) {
    this.title = title;
};

/**
 * Returns the name of the thing
 * @method sayWhat
 * @returns {string} - Compiled string denoting the thing's name
 */
thing.prototype.sayWhat = function () {
    return "This is a " + this.title;
};