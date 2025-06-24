export function getFirstTextNodeContent(
  element: Element | null,
): string | undefined {
  if (!element) {
    return '';
  }
  return Array.from(element.childNodes)
    .filter(node => node.nodeType === Node.TEXT_NODE)
    .map(node => node.textContent?.trim())
    .filter(node => node !== '')[0];
}

export function querySelectorContainingText(
  scope: Element,
  selector: string,
  text: string,
) {
  const elements = Array.from(scope.querySelectorAll(selector));
  return elements.find((e) => {
    const textContent = getFirstTextNodeContent(e);
    return textContent === text;
  });
}

/**
 * Finds a control, typically a button (but in theory could be some other component) by selector + enclosed icon name (inside an oscd-icon).
 * @param root The root element to search within.
 * @param buttonSelector The selector (e.g. 'oscd-filled-icon-button').
 * @param iconName The icon name to match (text content of enclosed oscd-icon).
 * @returns The matching button element or null.
 */
export function queryButtonByIcon(
  root: ParentNode,
  buttonSelector: string,
  iconName: string,
): HTMLElement | null {
  const buttons = Array.from(root.querySelectorAll(buttonSelector));
  return buttons.find((btn) => {
    const icon = btn.querySelector('oscd-icon');
    return icon && icon.textContent?.trim() === iconName;
  }) as HTMLElement | null;
}
