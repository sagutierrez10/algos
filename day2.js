let arr1= [5,7,3,2,9,1,4]

const selectionSort= (arr)=>{
    if(arr.length <=1){return arr;}
    for(var i=0; i<arr.length; i++){
        var max = 0;
        for(var x=1; x<arr.length-i;x++){
            if(arr[x] > arr[max]){
                max=x;
            }
        }
        [arr[max],arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[max]]
    }
    return arr;
}

console.log(selectionSort(arr1))