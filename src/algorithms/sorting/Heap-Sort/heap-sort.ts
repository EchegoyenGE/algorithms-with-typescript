class HeapSort {
    array: number[];

    constructor(arr: number[]){
        this.array = arr;
    }

    sort(arr: number[]){
        const length: number = arr.length;

        let heapTree = buildHeapTree(arr, length);

        for(let i = length - 1; i >= 0; i--){
            let aux: number = heapTree[0];
            heapTree[0] = heapTree[i];
            heapTree[i] = aux;

            heapifyTree(heapTree, i, 0);
        }

        console.log(arr)

        this.array = arr;
    }

    heapify(arr: number[], n: number, i: number) {
        let largest: number = i;
        const left: number = 2*i + 1;
        const right: number = 2*i + 2;
    
        if(left < n && arr[left] > arr[largest]){
            largest = left;
        }
    
        if(right < n && arr[right] > arr[largest]){
            largest = right;
        }
    
        if(largest !== i){
            const aux: number = arr[i];
            arr[i] = arr[largest];
            arr[largest] = aux;

            this.heapify(arr, n, largest);
        }

        this.array = arr;
    }

    getArray(){
        return this.array;
    }
}


const swap = (arr: number[], initial: number, large: number): number[] => {
    const aux: number = arr[initial];
    arr[initial] = arr[large];
    arr[large] = aux;

    return arr;
}

const heapifyTree = (arr: number[], n: number, i: number) => {
    let largest: number = i;
    const left: number = 2*i + 1;
    const right: number = 2*i + 2;

    if(left < n && arr[left] > arr[largest]){
        largest = left;
    }

    if(right < n && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest !== i){
        const newArr = swap(arr, i, largest);
        heapifyTree(newArr, n, largest);
    }
}

const buildHeapTree = (arr: number[], n: number): number[] => {
    let response: number[] = [];
    for(let i = n/2-1; i >= 0; i--){
        heapifyTree(arr, n, i);
    }

    return response;
}

const heapSort = (array: number[]): number[] => {

    const length: number = array.length;

    let heapTree = buildHeapTree(array, length);

    for(let i = length - 1; i >= 0; i--){
        let aux: number = heapTree[0];
        heapTree[0] = heapTree[i];
        heapTree[i] = aux;

        heapifyTree(heapTree, i, 0);
    }

    console.log(array)

    return array;
}

export default heapSort;