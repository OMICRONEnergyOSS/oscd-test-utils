export {
  xmlAttributeName,
  xmlNamespacePrefix,
  xmlPrefixedAttributeName,
  descendants,
  TestDoc,
  testDocs,
  remove,
  insert,
  setTextContent,
  setAttributes,
  complexEdit,
  simpleEdit,
  edit,
  UndoRedoTestCase,
  undoRedoTestCases,
  isParentNode,
  isParentOf,
  isValidInsert,
} from './arbitraries.js';

export {
  getFirstTextNodeContent,
  querySelectorContainingText,
  queryButtonByIcon,
} from './queries.js';
export { waitForDialogState } from './waitFors.js';

export { simulateKeypressOnElement } from './utils.js';
