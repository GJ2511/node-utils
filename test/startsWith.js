const expect = require('expect.js');
const Utils = require('../index.js');

describe('Utils', () => {
	it('Utils should have startsWith key', () => {
		expect(Utils).to.not.be.empty();
      	expect(Utils).to.be.an('object');
	  	expect(Utils).to.have.key('startsWith'); 
    });
	
	describe('startsWith', () => {
		it('without any parameter', () => {
			const result = Utils.startsWith();
			expect(result).not.to.be(true);
		});
		
		it('without search string', () => {
			const result = Utils.startsWith('Hello MEAN developers');
			expect(result).not.to.be(true);
		});
		
		it('without position', () => {
			const result = Utils.startsWith('Hello MEAN developers', 'EAN');
			expect(result).not.to.be(true);
		});
		
		
		it('startsWith', () => {
			const result = Utils.startsWith('Hello MEAN developers', 'EAN', 7);
			expect(result).to.be(true);;
		});
	});
});