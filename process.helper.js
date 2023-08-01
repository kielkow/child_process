const util = require('util');
const exec = util.promisify(require('child_process').exec);

class ProcessHelper {
  async getHostname() {
    const { stdout, stderr } = await exec('hostname');
    const hostname = !stderr ? stdout : '';
    return hostname.trim().replace(/(\r\n)+|\r+|\n+|\t+/);
  }
}

module.exports = new ProcessHelper();
