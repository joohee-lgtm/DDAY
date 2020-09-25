import '../style/reset.css';
import '../style/index.css';
import { format } from 'date-fns'
import {filterDuplicatedQuery, parseTimeStamp} from './util.js';
import Calendar from './calendar.js';

let eventDateArea;
let remainDateArea;
let calendarInstance;

const getDateTimeFromQuery = () => {
	const timeFromQuery = filterDuplicatedQuery("datetime");
	const dateTime = new Date(parseInt(timeFromQuery, 10));

	if(isNaN(dateTime.getTime())) {
		return null;
	}

	return dateTime;
}
// http://localhost:3000/?datetime=1601859600000
const displayEventDate = (eventDate) => {
	const textArea = eventDateArea.querySelector('span');

	textArea.innerHTML = format(eventDate, 'yyyy MM dd');
	
	eventDateArea.style.display = "";
}

const displayRemainTime = (eventDate) => {
	const direction = remainDateArea.querySelector('.direction');
	const dd = remainDateArea.querySelector('.dd');
	const hh = remainDateArea.querySelector('.hh');
	const mm = remainDateArea.querySelector('.mm');
	const ss = remainDateArea.querySelector('.ss');

	const callFrame = () => {
		const remainTime = Date.now() - eventDate.getTime();
		const {day, hour, minute, second} = parseTimeStamp(Math.abs(remainTime));

		direction.innerHTML = remainTime > 0 ? "PLUS" : "MINUS";
		dd.innerHTML = day;
		hh.innerHTML = hour;
		mm.innerHTML = minute;
		ss.innerHTML = second;

		requestAnimationFrame(callFrame);
	}

	requestAnimationFrame(callFrame);
}

const onClickCalendarConfirm = () => {
	const selectedTime = calendarInstance.getDateTime();

	if(isNaN(selectedTime)) {
		alert('날짜를 제대로 선택하셈');
		return ;
	}

	
	window.location.replace(`?datetime=${selectedTime}`);
}

const displayCalendar = () => {
	const calendarRoot = document.querySelector("#date_area");
	const confirmButton = calendarRoot.querySelector("button");

	if(!calendarInstance) {
		calendarInstance = new Calendar();
		calendarInstance.on('init', () => {
			console.log('calendar initialize');
		})
		calendarInstance.initialize(calendarRoot.querySelector(".calendar"));
	}

	confirmButton.addEventListener('click', onClickCalendarConfirm)
	calendarRoot.style.display = '';
}

const init = () => {
	// 1. 쿼리 확인
	// ex) datetime=1601859600000 
	let eventDate = getDateTimeFromQuery();

	if(!eventDate) {
		// 1.5. 캘린더 보여주기 => 날짜 선택하기 => 쿼리 바꾸기
		displayCalendar();

		return ;
	}
	const calendarRoot = document.querySelector("#date_area");
	calendarRoot.style.display = 'none';

	// 2. 화면에 현재 시간 및 남은 시간 표시하기
	displayEventDate(eventDate);
	displayRemainTime(eventDate);
}

const getInitializeLog = async () => {
	const {default: _} = await import(/* webpackChunkName: "lodash", webpackPrefetch: true */ 'lodash');
	
	return (...args) => {
			return _.join(args, ' ');
		}
}

window.addEventListener("DOMContentLoaded", function() {
	eventDateArea = document.querySelector("#event_area");
	remainDateArea = document.querySelector("#remain_area");

	getInitializeLog().then(logger => {
		console.log(logger('welcome', 'D-Day', 'counter'));
	});
	init();
});