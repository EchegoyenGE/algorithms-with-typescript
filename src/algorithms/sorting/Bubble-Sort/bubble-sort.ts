const bubbleSort = (array: number[]): number[] => {
    let isOrdered = false;
    
    while (!isOrdered){
      let someSwap = false;
      for (let i = 0; i < array.length - 1; i++){
          if(array[i] > array[i+1]){
              let aux = array[i+1];
              array[i+1] = array[i];
              array[i] = aux;
            someSwap = true;
          }
      }
      if(!someSwap) isOrdered = true;
    }
    return array;
}

export default bubbleSort;