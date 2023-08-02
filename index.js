import util from 'node:util';
import pslist from 'ps-list';
import child_process from 'node:child_process';

const exec = util.promisify(child_process.exec);

class ProcessHelper {
	async getHostname() {
		const { stdout, stderr } = await exec('hostname');
		const hostname = !stderr ? stdout : '';
		return hostname.trim().replace(/(\r\n)+|\r+|\n+|\t+/);
	}

	async getProcess() {
		const process = await pslist();
		return process;
	}
}

async function execute() {
	const processHelper = new ProcessHelper();

	const hostname = await processHelper.getHostname();
	const process = await processHelper.getProcess();
	
	console.log('HOSTNAME\n', hostname);
	console.log('PROCESS\n', process);
}

execute();
