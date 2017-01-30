const expect = require('expect.js');
const Utils = require('../index.js');

describe('Utils', () => {
	it('Utils should have getPathFromUrl key', () => {
		expect(Utils).to.not.be.empty();
      	expect(Utils).to.be.an('object');
	  	expect(Utils).to.have.key('getPathFromUrl'); 
    });
	
	describe('getPathFromUrl', () => {
		it('get path', () => {
			const result = Utils.getPathFromUrl('http://frontendinsights.com/nnm-3-react-image-fallback/');
			expect(result).to.eql('http://frontendinsights.com/nnm-3-react-image-fallback/');
		});
		
		it('get path', () => {
			const result = Utils.getPathFromUrl('https://mauth.merrillcorp.com/adfs/ls/?lc=2057&client-request-id=56aac60e-a6ad-4cca-a692-15d5e9d1c9fb&username=&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=estsredirect%3d2%26estsrequest%3drQIIAeNisNLLKCkpKLbS18-tzE0tKsrMyUnOLyrQK85ILEotyM_MK9FLzs_Vyy9Kz0wBsYqEuAT4jq0KW7vslM-ySaJXX148-XsWIz-yVqCqVYwWxBirH5-WX5RbrJ-SmpZYmlOil1hcUHGBkfEFI2MXE4uRgan5JiZmXyfPE0znDsndYhL0L0r3TAkvdktNSS1KLMnMz3vExBtanFrkn5dTGZKfnZq3i1kl1dzS2DDRJEnXzDjZQtck1SRVNzHJLFnX0jQt2dTCwMTQ2DL1AovAKxYeA2YrDg42AUYJBgWGHyyMi1iBPlMqXbW-rqvUeR_vuuWavLs_nGLVdwp2jMooTyoPDa0sjoysNHcONkssNSvKSTZ0zyt3Li6tLAjP8Xf1ckoKLLc1sDKcwCY0gY1pF6cduf63TywosjUEAA2');
			expect(result).to.eql('https://mauth.merrillcorp.com/adfs/ls/');
		});
	});
});