import { expect } from '@open-wc/testing';
import { waitForDialogState } from './waitFors.js';

describe('waitForDialogState', () => {
  it('resolves immediately if dialog is already open', async () => {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('open', '');
    let resolved = false;
    await waitForDialogState(dialog, 'open').then(() => {
      resolved = true;
    });
    expect(resolved).to.be.true;
  });

  it('waits for dialog to become open', async () => {
    const dialog = document.createElement('dialog');
    setTimeout(() => dialog.setAttribute('open', ''), 10);
    await waitForDialogState(dialog, 'open');
    expect(dialog.hasAttribute('open')).to.be.true;
  });

  it('resolves immediately if dialog is already closed', async () => {
    const dialog = document.createElement('dialog');
    let resolved = false;
    await waitForDialogState(dialog, 'closed').then(() => {
      resolved = true;
    });
    expect(resolved).to.be.true;
  });

  it('waits for dialog to emit closed event', async () => {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('open', '');
    setTimeout(() => {
      dialog.removeAttribute('open');
      dialog.dispatchEvent(new Event('closed'));
    }, 10);
    await waitForDialogState(dialog, 'closed');
    expect(dialog.hasAttribute('open')).to.be.false;
  });
});
