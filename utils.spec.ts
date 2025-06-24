import sinon from 'sinon';
import { simulateKeypressOnElement } from './utils.js';
import { expect } from '@open-wc/testing';

describe('simulateKeypressOnElement', () => {
  it('dispatches a keydown event with the correct key and ctrlKey', () => {
    const spy = sinon.spy();
    document.addEventListener('keydown', spy, { once: true });
    simulateKeypressOnElement('a', true);
    expect(spy.calledOnce).to.be.true;
    const event = spy.firstCall.args[0];
    expect(event).to.have.property('key', 'a');
    expect(event).to.have.property('ctrlKey', true);
  });
});
