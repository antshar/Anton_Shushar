import { DropboxPage } from '../pageClass';

const TOKEN = 'sl.BWci8cyrLrnUSxt8jD2dA6RX96D2D-Yx6X4bhfJ8NrvjUGuX_xDY_VHaqLyYc_cdHYh3dOleFAT0NQgdudOicv91C8VHUn2i-o7Fg-TIUndo4gVSnnq5Ss1vUkpw8gW6BJuUtRY'

let dropbox: DropboxPage;

describe('dropbox web api requests', function () {

	beforeAll(function () {
		dropbox = new DropboxPage(TOKEN);
	});

	describe('Files manipulation', () => {
		const dirName = 'files';
		const dirPath = '/' + dirName;
		const fileName = 'foo.txt';
		const filePath = dirPath + '/' + fileName;

		it('create_folder', (done) => {

			//calling createFolder method of Dropbox Page Object
			dropbox.createFolder(dirPath, (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => {
				if (err) { throw err; }
				result.should.have.property('name', dirName);
				done();
			});

		});

		it('get_metadata', (done) => {

			//calling getMetadata method of Dropbox Page Object
			dropbox.getMetadata(dirPath, (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => {
				if (err) { throw err; }
				result.should.have.property('.tag', 'folder');
				result.should.have.property('path_lower', dirPath);
				done();
			});

		});

		it('upload', (done) => {

			//calling upload method of Dropbox Page Object
			dropbox.upload(filePath, (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => {
				if (err) { throw err; }
				result.should.have.property('path_lower', filePath);
				done();
			});

		});

		it('delete', (done) => {

			//calling delete method of Dropbox Page Object
			dropbox.delete(filePath, (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => {
				if (err) { throw err; }
				result.should.have.property('path_lower', filePath);
				done();
			});

		});

	});
});
