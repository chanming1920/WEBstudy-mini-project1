const data = document.getElementById('writepass')
const data2 = document.getElementById('buttonpass')


data2.addEventListener('click',
    function(){
        const dataForResearch = data.value;

        stringData = toString(dataForResearch);
        function Research(){
            const str = stringData;
            const arr = str.split('');
            arr.foreach()
        }
    }
);

