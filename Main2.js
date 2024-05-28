// 비동기-Async 적용해보기
const data = document.getElementById('writepass')
const data2 = document.getElementById('buttonpass')

const dataForResearch = data.value;
stringData = toString(dataForResearch);
const str = stringData;
const arr = str.split('');

data2.addEventListener('click',
    function(){
        const checkArr =  countDifferentTypes(arr)
        if (checkArr >= 8)
            taskf();
        else
            alarm();
    }
);

function alarm()
{
    console.log('경고입니다.');
}



function countDifferentTypes(array) {
    const types = {};

    
    array.forEach(item => {
        const type = typeof item;
        types[type] = (types[type] || 0) + 1; 
    });

    return Object.keys(types).length; 
}

function f0(){
    return new Promise((resolve,reject)=>{
        console.log("");
        reject("");
        return;
        resolve("");
    })
}

function f1(){
    return new Promise((resolve,reject)=>{
        for(var i=0; i <= arr.length; i++)
            if(typeof arr[i]  === "number" && typeof arr[i+1] === "number" && typeof arr[i+2] === "number")
                var j0 = parseInt(arr[i]);
                var j1 = parseInt(arr[i+1]);
                var j2 = parseInt(arr[i+2]);
                if(((j0 == j1) && (j0 == j2))  || ((j1 - j0 == 1) && (j2 - j0 == 2)))
                    alarm();
                    
            else
                console.log('check done!');
        console.log("arr is Available!");
        console.log("입력 패스워드가 기본 정책을 따릅니다.");
        reject("error msg");
        return;
        resolve("패스워드 강도 확인 실시!");
    })
}

function f2(){
    return new Promise((resolve,reject)=>{
        let score = 0;
        if(/[A-Z]/.test(arr)) score++;
        if(/[a-z]/.test(arr)) score++;
        if(/[\w_]/.test(arr)) score++;

        // switch(score) {
        //     case 0:
        //     case 1:
        //         return 'Bad';
        //     case 2:
        //         return 'Good';
        //     case 3:
        //         return 'Nice';
        //     default:
        //         return '';
        // }
        console.log("score: ",score);
        reject("error msg");
        return;
        resolve("");
    })
}

function f3(){
    return new Promise((resolve,reject)=>{
        console.log("");
        reject("");
        return;
        resolve("");
    })
}

function f4(){
    return new Promise((resolve,reject)=>{
        console.log("");
        reject("");
        return;
        resolve("");
    })
}

function f5(){
    return new Promise((resolve,reject)=>{
        console.log("");
        reject("");
        return;
        resolve("");
    })
}

function f6(){
    return new Promise((resolve,reject)=>{
        console.log("");
        reject("");
        return;
        resolve("");
    })
}

async function taskf()
{
    try{
        let result = await f1();
        console.log("Next");
        result = await f2();
        console.log("Next");
        // result = await f3();
        // console.log("");
        // result = await f4();
        // console.log("");
        // result = await f5();
        // console.log("");
        // result = await f6();
        // console.log("");
        console.log("done!");
    }catch(err)
    {
        console.log("error:",err);
    }
}



