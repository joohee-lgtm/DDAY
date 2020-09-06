import './style.css';
import jae from './jrong.jpg';
import {filterDuplicatedQuery, parseTimeStamp} from './util.js';
import Calendar from './calendar.js';

let eventDateArea;
let remainDateArea;
let calendarInstance;

const getDateTime = () => {
	const timeFromQuery = filterDuplicatedQuery("time");
	const dateTime = new Date(parseInt(timeFromQuery, 10));

	if(isNaN(dateTime.getTime())) {
		return null;
	}

	return dateTime;
}


const displayEventDate = (eventDate) => {
	eventDateArea.innerHTML = `<span>${eventDate} 날짜 까지<img src="${jae}" /></span>`;
}


const displayRemainTime = (eventDate) => {
	const callFrame = () => {
		const remainTime = Date.now() - eventDate.getTime();

		if(remainTime > 0) {
			// 지나간 시간
			return ;
		}
		const {day, hour, minute, second} = parseTimeStamp(remainTime);

		remainDateArea.innerHTML = `<span>D-${day}:${hour}:${minute}:${second}</span>`;	

		requestAnimationFrame(callFrame);
	}

	requestAnimationFrame(callFrame);
}

const displayCalendar = () => {
	const calendarRoot = document.querySelector("#date_area");

	if(!calendarInstance) {
		calendarInstance = new Calendar();
		calendarInstance.on('init', () => {
			console.log('calendar initialize');
		})
		calendarInstance.initialize(calendarRoot.querySelector(".calendar"));
		
	}
	calendarInstance.show();
}

const init = () => {
	// 1. 쿼리 확인
	// ex) date=1601859600000 
	let eventDate = getDateTime();

	if(!eventDate) {
		// 1.5. 캘린더 보여주기 => 날짜 선택하기 => 쿼리 바꾸기
		displayCalendar();

		return ;
	}

	// 2. 화면에 현재 시간 및 남은 시간 표시하기
	displayEventDate(eventDate);
	displayRemainTime(eventDate);
}

const getInitializeLog = async () => {
	const {default: _} = await import(/* webpackChunkName: "lodash" */ 'lodash');
	
	return (...args) => {
			return _.join(args, ' ');
		}
}

window.addEventListener("DOMContentLoaded", function() {
	const basicElement = `
	<div class="welcome"></div>
	<div id="date_area">
		<div class="calendar">
		</div>
		<button>계산하기</button>
	</div>
    <p id="event_area"></p>
	<p id="remain_area"></p>`;
	
	document.body.insertAdjacentHTML('afterbegin', basicElement)
	eventDateArea = document.querySelector("#event_area");
	remainDateArea = document.querySelector("#remain_area");
	
	getInitializeLog().then(logger => {
		console.log(logger('welcome', 'D-Day', 'counter'));
	});
	init();
});