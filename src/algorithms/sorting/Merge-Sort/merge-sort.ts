
const mergeSort = (array: number[]): number[] => {

    if (array.length > 1) {

        const midIdx: number = Math.floor(array.length / 2);
        const lowArr: number[] = array.slice(0, midIdx);
        const maxArr: number[] = array.slice(midIdx);

        let lower = mergeSort(lowArr);
        let mayor = mergeSort(maxArr);

        let [i, j, k] = [0, 0, 0];

        while (i < lower.length && j < mayor.length) {
            if (lower[i] < mayor[j]) {
                array[k] = lower[i];
                i += 1;
            } else {
                array[k] = mayor[j];
                j += 1;
            }

            k += 1;
        }

        while (i < lower.length) {
            array[k] = lower[i];
            i += 1;
            k += 1;
        }

        while (j < mayor.length) {
            array[k] = mayor[j];
            j += 1;
            k += 1;
        }
    }

    return array;
}

export default mergeSort;