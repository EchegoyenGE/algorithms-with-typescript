const selectionSort = (array: number[]): number[] => {
    // take first num as minimum
    // iterates over all values from array 
    // compare with minimum and replace
    // set at first place and continue with next index

    for(let i = 0;i < array.length; i++){
        let min = array[i];
        let minIndex = i;
        
        for(let j = i; j < array.length; j++){
            if(array[j] < min) {
                min = array[j];
                minIndex = j;
            }
        }

        let aux = array[i];
        array[i] = array[minIndex];
        array[minIndex] = aux;
    }
    return array;
}

export default selectionSort;