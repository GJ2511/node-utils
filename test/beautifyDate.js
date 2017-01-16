const expect = require('expect.js');
const Utils = require('../index.js');

describe('Utils', () => {
	it('Utils should have beautifyDate key', () => {
		expect(Utils).to.not.be.empty();
      	expect(Utils).to.be.an('object');
	  	expect(Utils).to.have.key('beautifyDate'); 
    });
	
	describe('beautifyDate', () => {
		it('with format YYYY', () => {
			const result = Utils.beautifyDate('1/16/2017', 'YYYY');
			expect(result).to.eql('2017');
		});
		
		it('with format MM', () => {
			const result = Utils.beautifyDate('1/16/2017', 'MM');
			expect(result).to.eql('January');
		});
		
		it('with format yyyy-mm-dd', () => {
			const result = Utils.beautifyDate('1/16/2017', 'yyyy-mm-dd');
			expect(result).to.eql('2017-01-16');
		});
		
		it('with format yyyy-mm-dd h:i', () => {
			const result = Utils.beautifyDate('1/16/2017', 'yyyy-mm-dd h:i');
			expect(result).to.eql('2017-01-16 00:00');
		});
		
		it('with format mm-dd-yyyy hh:ss', () => {
			const result = Utils.beautifyDate('1/16/2017', 'MM-dd-yyyy hh:ss');
			expect(result).to.eql('01-16-2017 00:00');
		});
		
		it('without any format or undefined format', () => {
			const result = Utils.beautifyDate('1/16/2017');
			expect(result).to.eql('16-01-2017, 00:00');
		});
		
		
		it('without any format or undefined format with | as seperator', () => {
			const result = Utils.beautifyDate('1/16/2017', 'MM-dd-yyyy hh:ss', '|');
			expect(result).to.eql('01|16|2017 00:00');
		});
		
	});
});