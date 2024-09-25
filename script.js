let minutes = 87;
 const timeLapseElement = document.querySelector('.match-time-lapse');

 function updateTimeLapse() {
    minutes++;
    timeLapseElement.innerHTML = `${minutes}<span clas="blinking-apostrophe>'</span>">`
 }
 setInterval(updateTimeLapse, 60000);

 const buttons = document.querySelectorAll('.btn-icon');

 buttons.forEach(button => {
    button.addEventListener('click', function(){
        const icon = this.querySelector('i');
        icon.classList.toggle('active');
    });
 });
