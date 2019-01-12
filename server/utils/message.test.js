var expect = require('expect');

var {generateMesage} = require('./message');

describe('generateMesage', () => {
    it('should generate correct message object', () => {
        var from = '';
        var text = '';
        var msg = generateMesage('mike', text);

        expect(msg).toExist('The message object should be created');
        expect(msg.createdAt).toBeA('number', 'createdAt should be a number');
        expect(msg).toInclude({from, text}, `fields should be equal to \'${from}\' and ${text}`);
    })
});
