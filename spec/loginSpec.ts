import 'jasmine-reporters';

// importing custom class for testing
import { LoginPage, MainPage } from '../pageClass';

//to set jasmine default timeout
jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

// Test scenarios
describe("Authorize, add, remove user test scenario", function () {

	describe("Selenium test case for login page", function () {
		it("takes username and password for logging in", async function () {

			const loginPage = new LoginPage();

			expect(await loginPage.login()).toBe('success');

		});
	});

	// user instance with name and password
	const mainPage = new MainPage();
	const username = "Alice";
	const password = "Qwerty123_";

	describe("Create user scenario", function () {
		it("Presses add button, fills in the data and tries to add the person", async function () {

			expect(await mainPage.addPerson(username, password)).toBe('success');
		});
	});

	describe("Remove user scenario", function () {
		it("Presses add button, fills in the data and tries to add the person", async function () {

			expect(await mainPage.removePerson(username)).toBe('success');
		});
	});

})
