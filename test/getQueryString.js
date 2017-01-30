const expect = require('expect.js');
const Utils = require('../index.js');

describe('Utils', () => {
	it('Utils should have getQueryString key', () => {
		expect(Utils).to.not.be.empty();
      	expect(Utils).to.be.an('object');
	  	expect(Utils).to.have.key('getQueryString'); 
    });
	
	describe('getQueryString', () => {
		it('get QueryString', () => {
			const result = Utils.getQueryString('http://frontendinsights.com/nnm-3-react-image-fallback/');
			expect(result).to.be.an('object');
			expect(result).to.be.empty();
		});
		
		it('get QueryString', () => {
			const result = Utils.getQueryString('https://mauth.merrillcorp.com/adfs/ls/?lc=2057&client=56aac60e&test=1');
			expect(result).to.be.an('object');
			expect(result).to.not.be.empty();
			expect(result).to.only.have.keys('lc', 'client', 'test');
		});
	});
});