import dropboxV2Api from 'dropbox-v2-api';
import fs from 'fs';

export class DropboxPage {
	instance: dropboxV2Api;

	constructor(TOKEN: string) {
		this.instance = dropboxV2Api.authenticate({
			token: TOKEN
		});
	}

	createFolder(dirPath: string, callback: (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => void) {
		this.instance({
			resource: 'files/create_folder',
			parameters: {
				path: dirPath
			}
		}, callback);

		return 'success';
	}

	getMetadata(filePath: string, callback: (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => void) {
		this.instance({
			resource: 'files/upload',
			parameters: {
				path: filePath
			},
			readStream: fs.createReadStream(filePath)
		}, callback);

		return 'success';
	}
	upload(filePath: string, callback: (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => void) {
		this.instance({
			resource: 'files/upload',
			parameters: {
				path: filePath
			},
			readStream: fs.createReadStream(filePath)
		}, callback);

		return 'success';
	}
	delete(filePath: string, callback: (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => void) {
		this.instance({
			resource: 'files/delete',
			parameters: {
				'path': filePath
			}
		}, callback);

		return 'success';
	}
}
