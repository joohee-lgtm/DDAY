
import './style.css';
import jae from './jrong.jpg';
import {filterDuplicatedQuery} from './util.js';

let eventDateArea;
let remainDateArea;

const MIL_SECOND_UNIT = 1000;
const SECOND_UNIT = 60;
const MINUTE_UNIT = 60;
const HOUR_UNIT = 24;

const DAY_TO_SEC = HOUR_UNIT * MINUTE_UNIT * SECOND_UNIT;
const HOUR_TO_SEC = MINUTE_UNIT * SECOND_UNIT;
const MINUTE_TO_SEC = MINUTE_UNIT;

const getDateTime = () => {
	const timeFromQuery = filterDuplicatedQuery("time");
	const dateTime = new Date(parseInt(timeFromQuery, 10));

	if(isNaN(dateTime.getTime())) {
		return null;
	}

	return dateTime;
}


const parseTimeStamp = (milsec) => {
	const remainSecond = parseInt(Math.abs(milsec)/MIL_SECOND_UNIT, 10);
	
	const day = parseInt(remainSecond/DAY_TO_SEC, 10);
	const hour = parseInt((remainSecond-day*DAY_TO_SEC)/HOUR_TO_SEC, 10);
	const min = parseInt((remainSecond-day*DAY_TO_SEC-hour*HOUR_TO_SEC)/MINUTE_TO_SEC, 10);
	const sec = remainSecond-day*DAY_TO_SEC-hour*HOUR_TO_SEC-min*MINUTE_TO_SEC;


	return {
		day: day,
		hour: hour,
		minute: min,
		second: sec
	}
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

const init = () => {
	// 1. 쿼리 확인
	// ex) date=1601859600000 
	let eventDate = getDateTime();

	if(!eventDate) {
		// 1.5. 캘린더 보여주기 => 날짜 선택하기 => 쿼리 바꾸기
	}

	// 2. 화면에 현재 시간 및 남은 시간 표시하기
	displayEventDate(eventDate);
	displayRemainTime(eventDate);
}

window.addEventListener("DOMContentLoaded", function() {
	const basicElement = `
	<div class="welcome"></div>
    <p id="event_area"></p>
	<p id="remain_area"></p>`;
	
	document.body.insertAdjacentHTML('afterbegin', basicElement)
	eventDateArea = document.querySelector("#event_area");
	remainDateArea = document.querySelector("#remain_area");
	
	init();
});