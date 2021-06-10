function mergeSortedArrays(array1, array2){
    // inputs
    if(array1.length == 0){
        return array2;
    }else if(array2.length == 0){
        return array1;
    }


    // loop through existing elements
    // conditionals to check which one is greater than the other
    let mergeArray = [];
    let i = 0;
    let j = 0;
    let itemArray1 = array1[i];
    let itemArray2 = array2[j];

    while(itemArray1 || itemArray2){
        if(itemArray1 < itemArray2){
            mergeArray.push(itemArray1);
            i++;
            itemArray1 = array1[i];
        }else{
            mergeArray.push(itemArray2);
            j++;
            itemArray2 = array2[j];
        }
    }
    return mergeArray;
}

mergeSortedArrays([0,3,4,5], [4,6,30]);