// hostname.helper.js
const util = require('util');
const exec = util.promisify(require('child_process').exec);

class HostnameHelper {
  async getHostname() {
    const { stdout, stderr } = await exec('hostname');
    const hostname = !stderr ? stdout : '';
    return hostname.trim().replace(/(\r\n)+|\r+|\n+|\t+/);
  }
}

module.exports = new HostnameHelper();
