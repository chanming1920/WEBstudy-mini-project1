const data = document.getElementById('writepass')
const data2 = document.getElementById('buttonpass')


data2.addEventListener('click',
    function(){
        const dataForResearch = data.value;

        stringData = toString(dataForResearch);
        function Research(){
            const str = stringData;
            const arr = str.split('');

            const checkArr =  countDifferentTypes(arr)
            //arr.foreach()
            for(var i=0; i <= arr.length; i++)
                if(typeof arr[i]  === Number && typeof arr[i+1] === Number && typeof arr[i+2] === Number)
                    var j0 = parseInt(arr[i]);
                    var j1 = parseInt(arr[i+1]);
                    var j2 = parseInt(arr[i+2]);
                    if((j0 == j1 && j0 == j2)  || (j1 - j0 == 1 && j2 - j0 == 2))
                        alarm();
        }    
    }
);

// 알람용
function alarm()
{
    console.log('경고입니다.');
}

// 해당 함수로 문자 종류 판단
function countDifferentTypes(array) {
    const types = {};

    
    array.forEach(item => {
        const type = typeof item;
        types[type] = (types[type] || 0) + 1; 
    });

    return Object.keys(types).length; 
}
