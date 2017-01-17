const expect = require('expect.js');
const Utils = require('../index.js');

describe('Utils', () => {
	it('Utils should have containsWord key', () => {
		expect(Utils).to.not.be.empty();
      	expect(Utils).to.be.an('object');
	  	expect(Utils).to.have.key('containsWord'); 
    });
	
	describe('containsWord', () => {
		it('contains word', () => {
			const result = Utils.containsWord('Hi I am a MEAN stack developer', 'MEAN');
			expect(result).to.be(true);
		});
		
		it('contains word but as a substr', () => {
			const result = Utils.containsWord('Hi I am a MEAN stack developer', 'JAVA');
			expect(result).not.to.be(true);
		});
		
		it('does not contains word', () => {
			const result = Utils.containsWord('Hi I am a MEAN stack developer', 'lop');
			expect(result).not.to.be(true);
		});
	});
});