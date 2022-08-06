import {Hello} from "../src/hello";

describe('Testing Hello', () => {
	it('Expects a name to be present for a hello', () => {
		expect(Hello('name')).toEqual('Hello name')
	});
});
