import{hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const dsplyDate = document.querySelector('.displayDate');
const dsplyTime = document.querySelector('.displayTime');

const displayDate = dayjs().add(1, 'days').format('MMMM DD YYYY')
const displayTime = dayjs().startOf('time').format('H:s A')


dsplyDate.innerHTML = displayDate;
dsplyTime.innerHTML = displayTime;


const dsplySomething = document.querySelector('.dsplySomething');
const isThisWhat = document.querySelector('.isThisWhat');

isThisWhat.addEventListener('click', () => {
 dsplySomething.innerHTML = dsplySomething.innerHTML === 'hi' ? 'hello' : 'hi'; 
});


