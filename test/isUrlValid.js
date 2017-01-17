const expect = require('expect.js');
const Utils = require('../index.js');

describe('Utils', () => {
	it('Utils should have isUrlValid key', () => {
		expect(Utils).to.not.be.empty();
      	expect(Utils).to.be.an('object');
	  	expect(Utils).to.have.key('isUrlValid'); 
    });
	
	describe('isUrlValid', () => {
		it('http://userid:password@example.com:8080', () => {
			const result = Utils.isUrlValid('http://userid:password@example.com:8080');
			expect(result).to.be(true);
		});
		
		it('ftp://foo.bar/baz', () => {
			const result = Utils.isUrlValid('ftp://foo.bar/baz');
			expect(result).to.be(true);
		});
		
		it('https://☺.damowmow.com/', () => {
			const result = Utils.isUrlValid('https://☺.damowmow.com/');
			expect(result).to.be(true);
		});
		
		it('http://foo.bar?q=Spaces should be encoded', () => {
			const result = Utils.isUrlValid('http://foo.bar?q=Spaces should be encoded');
			expect(result).not.to.be(true);
		});
		
		it('foo.com', () => {
			const result = Utils.isUrlValid('foo.com');
			expect(result).not.to.be(true);
		});
		
		it('http://3628126748', () => {
			const result = Utils.isUrlValid('http://3628126748');
			expect(result).not.to.be(true);
		});
	});
});