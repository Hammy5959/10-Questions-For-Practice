`Remove the spaces found in a string`;

function removeWhiteSpacesInString(str: string) {
    let removeSpaces=str.replace(/\s/g, "")
    return removeSpaces
}
let name:string=`H a m i d M a q s o o d`
console.log(removeWhiteSpacesInString(name))