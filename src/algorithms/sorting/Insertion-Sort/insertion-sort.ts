const insertionSort = (array: number[]): number[] => {

    for(let i = 1;i < array.length; i++){
        const key: number = array[i];
        let j: number = i - 1;

        while (j >= 0 && key < array[j]){
            array[j + 1] = array[j];
            --j;
        }

        array[j + 1] = key;
    }

    return array;
}

export default insertionSort;