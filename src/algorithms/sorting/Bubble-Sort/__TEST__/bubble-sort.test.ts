import bubbleSort from "./bubble-sort";

describe('Bubble sort', () => {
    test('Should order an unordered array', () => {
        const unorderedArray: number[] = [5, 1, 7, 3, 2, 6, 9, 0, 8]

        const orderedArray: number[] = [0, 1, 2, 3, 5, 6, 7, 8, 9]

        expect(bubbleSort(unorderedArray)).toStrictEqual(orderedArray);
    })

    test('Should return the same array if it is ordered', () => {
        const orderedArray: number[] = [0, 1, 2, 3, 5, 6, 7, 8, 9];

        expect(bubbleSort(orderedArray)).toStrictEqual(orderedArray);
    })

    test('Should return the same array if it composed by all the same numbers', () => {
        const unorderedArray: number[] = [1, 1, 1, 1, 1]

        expect(bubbleSort(unorderedArray)).toStrictEqual(unorderedArray);
    })
})
