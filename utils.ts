export function simulateKeypressOnElement(key: string, ctrlKey: boolean) {
  const event = new KeyboardEvent('keydown', {
    key,
    ctrlKey,
  });
  document.dispatchEvent(event);
}
