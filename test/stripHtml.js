const expect = require('expect.js');
const Utils = require('../index.js');

describe('Utils', () => {
	it('Utils should have stripHtml key', () => {
		expect(Utils).to.not.be.empty();
      	expect(Utils).to.be.an('object');
	  	expect(Utils).to.have.key('stripHtml'); 
    });
	
	describe('stripHtml', () => {
		it('strip only scipts', () => {
			const result = Utils.stripHtml('<script>alert(1);</script><p>HI GAURAV JOSHI</p><script>alert(1);</script>');
			
			result.then(str => {
				expect(str).to.eql('<p>HI GAURAV JOSHI</p>');	
			})
		});
		
		it('strip all', () => {
			const result = Utils.stripHtml('<script>alert(1);</script><p>HI GAURAV JOSHI</p><script>alert(1);</script>', true);
			result.then(str => {
				expect(str).to.eql('HI GAURAV JOSHI');	
			})
		});
	});
});