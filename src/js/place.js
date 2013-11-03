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