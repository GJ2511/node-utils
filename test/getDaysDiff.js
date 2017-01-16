const expect = require('expect.js');
const Utils = require('../index.js');

describe('Utils', () => {
	it('Utils should have getDaysDiff key', () => {
		expect(Utils).to.not.be.empty();
      	expect(Utils).to.be.an('object');
	  	expect(Utils).to.have.key('getDaysDiff'); 
    });
	
	describe('getDaysDiff', () => {
		it('get diff', () => {
			const result = Utils.getDaysDiff('01/01/2017');
			expect(result).to.eql(16);
		});
	});
});