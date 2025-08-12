const assert = require('assert');
const sinon = require('sinon');
const question1 = require('../question1.js');


describe('question1', () => {


    it('should ask for name and greet user', async () => {
    const rl = {
      question: sinon.stub(),
      close: sinon.spy()
    };

    // rl.question.yields('Syda');  // simulate user typing 'Alice'
    
    const name = await question1(rl);

    // assert.strictEqual(name, 'Syda');
    // sinon.assert.calledOnce(rl.close);

    //  assert.strictEqual(name, 'Syda');
    // sinon.assert.calledOnce(rl.close);
  });
});