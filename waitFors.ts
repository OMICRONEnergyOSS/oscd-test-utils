
export async function waitForDialogState(element: Element, state: 'open' | 'closed') {
  return new Promise<void>((resolve) => {
    const dialog = element as Element & { open?: boolean };
    if ((dialog.open && state === 'open') || (!dialog.open && state === 'closed')) {
      resolve();
      return;
    }
    const observer = new MutationObserver(() => {
      if (
        (state === 'open' && dialog.open) ||
        (state === 'closed' && !dialog.open)
      ) {
        observer.disconnect();
        resolve();
      }
    });
    observer.observe(dialog, { attributes: true, attributeFilter: ['open'] });
  });
}
