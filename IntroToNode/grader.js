function average(arr)
{
    var ret = 0;
    for(var i=0; i<arr.length; i++)
    {
        ret = arr[i] + ret;
    }
    
    return Math.round(ret/arr.length);
}



var scores = [100, 99, 3, 2, 15];
console.log(average(scores));