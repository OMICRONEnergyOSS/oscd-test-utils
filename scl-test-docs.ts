export const sclDocString = `<?xml version="1.0" encoding="UTF-8"?>
    <SCL version="2007" revision="B" xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:ens1="http://example.org/somePreexistingExtensionNamespace">
    <Substation name="A1" desc="test substation"></Substation>
  </SCL>`;
const testDocStrings = [
  sclDocString,
  `<?xml version="1.0" encoding="UTF-8"?>
    <testDoc1>
  <element1 property1="value1" property2="value2">SomeText</element1>
  <element2 property2="value2" property3="value3"><!--AComment--></element2>
  <element3 property3="value3" property1="value1">
    <subelement1 property1="value1" property2="value2">SomeMoreText</subelement1>
    <subelement2 property2="value2" property3="value3"><!----></subelement2>
    <subelement3 property3="value3" property1="value1"></subelement3>
  </element3>
  </testDoc1>`,
  `<?xml version="1.0" encoding="UTF-8"?>
    <testDoc2>
  <element1 property1="value1" property2="value2">SomeText</element1>
  <element2 property2="value2" property3="value3"><!--AComment--></element2>
  <element3 property3="value3" property1="value1">
    <subelement1 property1="value1" property2="value2">SomeMoreText</subelement1>
    <subelement2 property2="value2" property3="value3"><!----></subelement2>
    <subelement3 property3="value3" property1="value1"></subelement3>
  </element3>
  </testDoc2>`,
];
