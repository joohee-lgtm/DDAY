import qs from 'query-string';

export const filterDuplicatedQuery = (queryName) => {
	const query = (qs.parse(window.location.search) || {})[queryName];

	if(Array.isArray(query)){

		return query[0];
	}
	return query;
}

