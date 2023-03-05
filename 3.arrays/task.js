function compareArrays(arr1, arr2) {
    if(arr1.length >= arr2.length){
  return arr1.every((element) => arr1[element] === arr2[element]);
    } else {
        return arr2.every((element) => arr2[element] === arr1[element]);
    }
}

function getUsersNamesInAgeRange(users, gender) {
if(users.length === 0 || (gender !== "мужской"&& gender!=="женский")){
    return 0;
}
   let result = users.filter(element => element.gender === gender)
    .map(element => element = element.age);
    return result.reduce((acc ,element) => acc + element ,0) / result.length;
}
