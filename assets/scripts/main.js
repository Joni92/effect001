const block = document.querySelectorAll('.block');
const resetDuration = 1000;

block.forEach((block) => {
    let timeoutId;

    block.addEventListener('mouseover', () => {
        clearTimeout(timeoutId);
        block.classList.add('active');
        timeoutId = setTimeout(() => {
            block.classList.remove('active');
        }, resetDuration);
    })
})
