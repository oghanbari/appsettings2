
var argscheck = require('cordova/argscheck'),
  exec = require('cordova/exec');

function AppSettings2 () {

}
/**
 * Get a config.xml settings (preference) value
 *
 * @param {String} keyArray Key
 * @param {Function} successCallback The function to call when the value is available
 * @param {Function} errorCallback The function to call when value is unavailable
 */
AppSettings2.prototype.get2 = function (keyArray, successCallback, errorCallback) {
    try {
        argscheck.checkArgs('AFF', 'AppSettings2.get2', arguments);
    } catch (exception) {
        argscheck.checkArgs('AF', 'AppSettings2.get2', arguments);
    }

    exec(successCallback, errorCallback, "AppSettings2", "get2", keyArray);
};

module.exports = new AppSettings2();
