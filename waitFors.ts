import { waitUntil } from '@open-wc/testing';

export async function waitForDialogState(
  dialog: Element,
  state: 'open' | 'closed',
) {
  await waitUntil(() => {
    const maybeDialogWithOpen = dialog as { open?: boolean };
    return typeof maybeDialogWithOpen.open !== 'undefined'
      ? !!maybeDialogWithOpen.open === (state === 'open')
      : state === 'closed';
  }, `Dialog did not ${state} within the expected time`);
  return dialog;
}
