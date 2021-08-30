function bubbleSort(arr){
    // run/iterate through the array
    for (var i=0; i<arr.length;i++){
        for(var x=0; x<arr.length-i;x++){
            // if the value at the current index is greater than the value at the next index, then it is out of order and we need to swap
            if(arr[x]>arr[x+1]){ 
                // let temp =arr[x];
                // arr[x]= arr[x+1];
                // arr[x+1]= temp;
                // shorter way of swaping
                [arr[x], arr[x+1]] = [arr[x+1],arr[x]]
            }
        }
    }
    console.log(arr)
}


bubbleSort([23,12,18,22,21,1,13,25])