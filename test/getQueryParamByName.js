const expect = require('expect.js');
const Utils = require('../index.js');

describe('Utils', () => {
	it('Utils should have getQueryParamByName key', () => {
		expect(Utils).to.not.be.empty();
      	expect(Utils).to.be.an('object');
	  	expect(Utils).to.have.key('getQueryParamByName'); 
    });
	
	describe('getQueryParamByName', () => {
		it('without param name', () => {
			const result = Utils.getQueryParamByName('', 'http://frontendinsights.com/nnm-3-react-image-fallback/');
			expect(result).to.eql(null);
		});
		
		it('without url', () => {
			const result = Utils.getQueryParamByName('http://frontendinsights.com/nnm-3-react-image-fallback/');
			expect(result).to.eql(null);
		});
		
		it('getQueryParamByName', () => {
			const result = Utils.getQueryParamByName('a', 'https://mauth.merrillcorp.com/adfs/ls/?lc=2057&client=test&a=1');
			expect(result).to.eql(1);
		});
	});
});