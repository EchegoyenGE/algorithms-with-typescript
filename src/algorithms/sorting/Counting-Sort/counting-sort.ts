const countingSort = (array: number[]): number[] => {
    const max = Math.max(...array);
    
    let countArray: number[] = new Array(max+1).fill(0);
    
    for(const val of array){
      countArray[val]++;
    }
    
    let outputArray: number[] = [];
    
    for(let i = 0; i < max+1; i++){
      if(countArray[i] === 0) continue;
      
      for(let j = 0; j < countArray[i]; j++){
        outputArray.push(i)
      }
    }
      
    return outputArray;
}


export default countingSort;