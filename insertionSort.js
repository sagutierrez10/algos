const insertionSort = (arr)=>{
for(var i=1; i< arr.length; i++){
    while(arr[i]<arr[i-1]){
        [arr[i], arr[i-1]]=[arr[i-1],arr[i]]
        i--
    }
}
return arr
}

console.log(insertionSort([4,7,1,2,5,0,9,6]));