const expect = require('expect.js');
const Utils = require('../index.js');

describe('Utils', () => {
	it('Utils should have startsWith key', () => {
		expect(Utils).to.not.be.empty();
        expect(Utils).to.be.an('object');
        expect(Utils).to.have.key('getRandomString'); 
    });
	
	describe('getRandomString', () => {
		it('without any parameter', () => {
			const result = Utils.getRandomString();
			expect(result).to.be.a('string');
			expect(result).to.have.length(4);
		});
		
		it('with length parameter', () => {
			const result = Utils.getRandomString(5);
			expect(result).to.be.a('string');
			expect(result).to.have.length(5);
		});
	});
});