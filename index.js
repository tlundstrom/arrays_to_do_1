let arrPush = [1,6,"cat",1,"dog", true, "bird", 7];

const pushFront =(array, item) => {
    //create placeholder array;
    let newArray = [];
    //set placeholder position 0 to new item;
    newArray[0] = item;
    //iterate through array setting remaining placeholder positions to original array
    for(let i=0;i<array.length;i++){
        newArray[i+1] = array[i];
    }
    //set original array to placeholder
    array = newArray;
    //return the original array now modified.
    return array;
}

console.log(pushFront(arrPush, "taco"));

let arrPop = [1, 6, "cat", 1, "dog", true, "bird", 7];

const popFront = (array) => {
    //create placeholder array;
    let newArray = [];
    //iterate through array setting remaining placeholder positions to original array minus the 0 position
    for(let i=1;i<array.length;i++){
        newArray[i-1] = array[i];
    }
    //set original array to placeholder
    array = newArray;
    //return the original array now modified.
    return array;
}

console.log(popFront(arrPop));

let arrInsert = [1, 6, "cat", 1, "dog", true, "bird", 7];
const insertAt =(array, item, index) => {
    //create placeholder array;
    let newArray = [];
    //iterate through array setting remaining placeholder positions to original array
    for(let i=0;i<array.length +1;i++){
        //set place holdder to orginal array until position index is reached
        if(i < index-1){
            newArray[i] = array[i]
            //when index is reached set to value provided
        }else if(i === index -1){
            newArray[i] = item
            //continue to set remaining place holder array to original.
        }else{
            newArray[i] = array[i-1];
        }
    }
    //set original array to placeholder
    array = newArray;
    //return the original array now modified.
    return array;
}

console.log(insertAt(arrInsert, "taco", 3));