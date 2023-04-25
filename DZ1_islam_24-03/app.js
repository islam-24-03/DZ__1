const innInput = document.getElementById('innInput')
const innCheck = document.getElementById('innCheck')
const innResult = document.querySelector('.innResult')

const regExp = /^\d{4}-\d{4}-\d{4}$/

innCheck.addEventListener('click',() => {
    if (regExp.test(innInput.value)){
        innResult.innerHTML = 'CORRECTLY'
        innResult.style.color = 'green'
    } else {
        innResult.innerHTML = '404'
        innResult.style.color = 'red'
    }
})

const bBlock = document.getElementById('bBlock');
const sBlock = document.getElementById('sBlock');

function moveSmallBlock(position) {
    sBlock.style.left = position + 'px';
    if (position < bBlock.offsetWidth - sBlock.offsetWidth) {
        setTimeout(() => {
            moveSmallBlock(position + 1);
        }, 20);
    }
}

moveSmallBlock(0);