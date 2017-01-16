const expect = require('expect.js');
const Utils = require('../index.js');

describe('Utils', () => {
	it('Utils should have beautifyNumber key', () => {
		expect(Utils).to.not.be.empty();
      	expect(Utils).to.be.an('object');
	  	expect(Utils).to.have.key('beautifyNumber'); 
    });
	
	describe('beautifyNumber', () => {
		it('1', () => {
			const result = Utils.beautifyNumber(1);
			expect(result).to.eql('1');
		});
		
		it('1000', () => {
			const result = Utils.beautifyNumber(1000);
			expect(result).to.eql('1K');
		});
		
		it('1050000', () => {
			const result = Utils.beautifyNumber(1050000, 2);
			expect(result).to.eql('1.05M');
		});
		
		it('1000000000', () => {
			const result = Utils.beautifyNumber(1000000000);
			expect(result).to.eql('1G');
		});
		
		it('1000000000000', () => {
			const result = Utils.beautifyNumber(1000000000000);
			expect(result).to.eql('1T');
		});
		
		it('1000000000000000', () => {
			const result = Utils.beautifyNumber(1000000000000000);
			expect(result).to.eql('1P');
		});
			
		it('1000000000000000000', () => {
			const result = Utils.beautifyNumber(1000000000000000000);
			expect(result).to.eql('1E');
		});
		
		it('1000000000000000000000', () => {
			const result = Utils.beautifyNumber(1000000000000000000000);
			expect(result).to.eql('1Z');
		});
		
		it('1000000000000000000000000	', () => {
			const result = Utils.beautifyNumber(1000000000000000000000000);
			expect(result).to.eql('1Y');
		});
	});
});