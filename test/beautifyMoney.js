const expect = require('expect.js');
const Utils = require('../index.js');

describe('Utils', () => {
	it('Utils should have beautifyMoney key', () => {
		expect(Utils).to.not.be.empty();
      	expect(Utils).to.be.an('object');
	  	expect(Utils).to.have.key('beautifyMoney'); 
    });
	
	describe('beautifyMoney', () => {
		it('no Amount is passed', () => {
			const result = Utils.beautifyMoney();
			expect(result).to.eql(0);
		});
		
		it('no currency is passed', () => {
			const result = Utils.beautifyMoney(1545);
			expect(result).to.eql('$1.55K');
		});
		
		it('with raw', () => {
			const result = Utils.beautifyMoney(1545, 'GBP', true);
			expect(result).to.eql('£1545');
		});
		
		it('without raw', () => {
			const result = Utils.beautifyMoney(1545, 'GBP');
			expect(result).to.eql('£1.55K');
		});		
	});
});