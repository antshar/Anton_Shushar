# Selenium

 - [x] TypeScript
 - [x] [Jasmine](https://jasmine.github.io/) instruction scenarios `spec/dropboxSpec.ts`
 - [x] OOP principles
 - [x] Design Patterns: `Builder`
 - [x] Run test via `npm test`

### Instruction
First head to https://www.dropbox.com/developers/apps and gather a token for your app

<img src="https://user-images.githubusercontent.com/54121465/211146137-8bf0f541-afee-4cd4-bd81-092afd8de157.png" width="800">

Then paste the newly created token as `TOKEN` const in `spec/dropboxSpec.ts`

There are two options to run the tests

- Run each test scenario manually
	```sh
	$ node ./node_modules/jasmine/bin/jasmine.js --config=./support/jasmine.json
	$ start http://localhost:8888?spec=<SPEC>
	```
- Run predefined scenarios all at once using
	```sh
	$ npm test
	```

### Demo

Scenario perform the following tests:

1. Creates folder `files` in drobpox root
2. Reads metadata of the folder to make sure the folder is present
3. Creates `foo.txt` file in `files` folder by uploading it from `files/foo.txt` project directory
4. Delets currently uploaded `foo.txt` file
