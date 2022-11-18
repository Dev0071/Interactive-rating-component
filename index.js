const rating = document.querySelectorAll('.number');
const submitBtn = document.getElementById('submit-btn');
const ratingCard = document.getElementById('container');
const thanksCard = document.getElementById('thank-you');
const selectednumber = document.getElementById('selected');

thanksCard.style.c

rating.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        selected = e.currentTarget;
        selected.style.backgroundColor = 'hsl(25, 97%, 53%)';
        selected.style.color = 'white';
        selectednumber.innerHTML = selected.dataset.id;

    });
});

submitBtn.addEventListener('click', () => {
    ratingCard.classList.replace('flex', 'hidden');
    thanksCard.classList.replace('hidden', 'flex');
});



