function solve() {
    document.getElementById('submitBtn').addEventListener('click',onClick);

    console.log( document.getElementById('submitBtn').value);

    let inputElements = document.querySelectorAll('input[type=text]');
    let textAreaElement = document.querySelector('textarea');
    let selectElement = document.querySelector('select');

    function onClick() {
        let isTrue = true;
        for (const input of inputElements) {
            if(input.value !== ''){
                isTrue = true
            }else {
                isTrue = false;
                break;
            }
        }

        if(isTrue && textAreaElement.value !== '' && selectElement.value !== ''){
            for (const input of inputElements) {
                input.value = '';
            }

            selectElement.value = '';
            textAreaElement.value = '';
        }


    }
}