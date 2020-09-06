import qs from 'query-string';


export const MIL_SECOND_UNIT = 1000;
export const SECOND_UNIT = 60;
export const MINUTE_UNIT = 60;
export const HOUR_UNIT = 24;

const DAY_TO_SEC = HOUR_UNIT * MINUTE_UNIT * SECOND_UNIT;
const HOUR_TO_SEC = MINUTE_UNIT * SECOND_UNIT;
const MINUTE_TO_SEC = MINUTE_UNIT;

export const filterDuplicatedQuery = (queryName) => {
	const query = (qs.parse(window.location.search) || {})[queryName];

	if(Array.isArray(query)){

		return query[0];
	}
	return query;
}

export const parseTimeStamp = (milsec) => {
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


