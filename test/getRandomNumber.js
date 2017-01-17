const expect = require('expect.js');
const Utils = require('../index.js');

describe('Utils', () => {
	it('Utils should have getRandomNumber key', () => {
		expect(Utils).to.not.be.empty();
      	expect(Utils).to.be.an('object');
	  	expect(Utils).to.have.key('getRandomNumber'); 
    });
	
	describe('getRandomNumber', () => {
		it('strip only scipts', () => {
			const result = Utils.getRandomNumber(1, 5);	
			expect(result).to.be.a('number');
		});
		
		it('strip all', () => {
			const result = Utils.getRandomNumber();
			expect(result).to.be.a('number');
		});
	});
});