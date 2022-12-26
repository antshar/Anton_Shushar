
import dropboxV2Api from 'dropbox-v2-api';
import fs from 'fs';

const TOKEN = 'sl.BVt7ws8VCnuqF3yrIxjpomB2wHcmmw6xPgROJl_Kca8FpX9oIgWAV7wOiDIOj9hEk__iB7F6RD_QdiZBfXprTVHhVdPAi7crIH3nfd4SFTpSXdDNAeDtiuI-ZeO_ujCXsvBXamI'

let dropbox;

describe('dropbox web api requests', function () {

	beforeAll(function () {
		dropbox = dropboxV2Api.authenticate({
			token: TOKEN
		});
	});

	describe('Files manipulation', () => {
		const dirName = 'files';
		const dirPath = '/' + dirName;
		const fileName = 'foo.txt';
		const filePath = dirPath + '/' + fileName;

		it('create_folder', (done) => {
			dropbox({
				resource: 'files/create_folder',
				parameters: {
					path: dirPath
				}
			}, (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => {
				if (err) { throw err; }
				result.should.have.property('name', dirName);
				done();
			});
		});
		it('get_metadata', (done) => {
			dropbox({
				resource: 'files/get_metadata',
				parameters: {
					path: dirPath,
					include_media_info: false,
					include_deleted: false,
					include_has_explicit_shared_members: false
				}
			}, (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => {
				if (err) { throw err; }
				result.should.have.property('.tag', 'folder');
				result.should.have.property('path_lower', dirPath);

				done();
			});
		});
		it('upload', (done) => {
			dropbox({
				resource: 'files/upload',
				parameters: {
					path: filePath
				},
				readStream: fs.createReadStream(filePath)
			}, (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => {
				if (err) { throw err; }
				result.should.have.property('path_lower', filePath);
				done();
			});
		});
		it('delete', (done) => {
			dropbox({
				resource: 'files/delete',
				parameters: {
					'path': filePath
				}
			}, (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => {
				if (err) { throw err; }
				result.should.have.property('path_lower', filePath);
				done();
			});
		});
	});
});