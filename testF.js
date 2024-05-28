function f1(){
    for(var i=0; i <= arr.length; i++)
    if(typeof arr[i]  === "number" && typeof arr[i+1] === "number" && typeof arr[i+2] === "number")
        var j0 = parseInt(arr[i]);
        var j1 = parseInt(arr[i+1]);
        var j2 = parseInt(arr[i+2]);
        if((j0 == j1 && j0 == j2)  || (j1 - j0 == 1 && j2 - j0 == 2))
            alarm();
}

function alarm()
{
    console.log('경고입니다.');
}