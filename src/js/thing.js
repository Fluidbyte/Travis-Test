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