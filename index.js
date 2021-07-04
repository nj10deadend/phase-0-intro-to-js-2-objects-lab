let employee = {    // Write your solution in this file!
    name: '' ,
    streetAddress: ''
} 
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee}; // or Object.assign( {}, employee, {[key]: value})
    newObject[key] = value;
    return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject2 = Object.assign(employee, {[key]: value});
    return newObject2;
}
function deleteFromEmployeeByKey(employee, key) {
    let newObject3 = {...employee};
    delete newObject3[key];
    return newObject3;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newObject4 = employee;
    delete newObject4[key]
    return newObject4;
}