/**
 * Applies an attribute to a unique tag name
 *
 * @param elementName Name of UNIQUE element (body, html, etc)
 * @param attribute Attribute to apply value to
 * @param value Value to set on attribute
 * @returns {null}
 */
export const documentModifier = (elementName, attribute, value) => {
  if (typeof window === 'undefined') {
    return;
  }
  let element = document.getElementsByTagName(elementName);
  if (!element) {
    return;
  }

  // get what's already in the body class
  //var classes = element[0].getAttribute("class");
  //element[0].classList.add(value);
  //element[0].setAttribute(attribute, value);
};

/*eslint no-extend-native: ["error", { "exceptions": ["Number"] }]*/
Number.prototype.map = function(in_min, in_max, out_min, out_max) {
    return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}