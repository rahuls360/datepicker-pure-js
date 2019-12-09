const dayPicker = document.querySelector('.day');
const monthPicker = document.querySelector('.month');
const yearPicker = document.querySelector('.year');
const picker = document.querySelector('.picker');

dayPicker.addEventListener('focus', () => handleFocus('day'));
monthPicker.addEventListener('focus', () => handleFocus('month'));
yearPicker.addEventListener('focus', () => handleFocus('year'));

function handleFocus(type){
    picker.style.width = `${event.target.clientWidth}px`;
    picker.style.left = `${event.target.offsetLeft}px`;
    picker.classList.remove('day-selected')
    picker.classList.remove('month-selected')
    picker.classList.remove('year-selected')
    picker.classList.add(`${type}-selected`)
    generateDates(type);
}

function generateDates(type){
    let date = new Date();
    let month = date.getMonth();
    if(type === 'day'){
        let daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
        if(month !== 1){
            let ul = document.createElement('ul');
            for(let i=1; i<=daysInMonth[month]; i++){
                let li = document.createElement('li');
                li.innerText = i;
                ul.appendChild(li);
            }
            picker.innerHTML = ul.innerHTML;
        }else {
            // manage leap year
        }
    }else if(type === 'month'){
        let monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let ul = document.createElement('ul');
        monthsArray.forEach(m => {
            let li = document.createElement('li');
            li.innerText = m;
            ul.appendChild(li);
        })
        picker.innerHTML = ul.innerHTML;
    }
}