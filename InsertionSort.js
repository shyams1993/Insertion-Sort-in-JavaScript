arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

function insertionSort(arr)
{
    let i = 1;
    let start = arr[0];
    let length = arr.length;
    while (i < length)
    {
        if (arr[i] < start)
        {
            let holder = arr[i];
            arr.splice(i,1);
            for (let x = 0; x < i ; x++)
            {
                if (holder < arr[x])
                {
                    arr.splice(x,0,holder);
                    break;
                }
            }
        }
        start = arr[i];
        i++;
    }
    return arr;
}

console.log(insertionSort(arr));