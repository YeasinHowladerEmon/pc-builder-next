function convertToLowerCaseNoSpace(inputString) {
    // Convert to lowercase and remove spaces
    return inputString.toLowerCase().replace(/\s+/g, '');
}
export default convertToLowerCaseNoSpace;