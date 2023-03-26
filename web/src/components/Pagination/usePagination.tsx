import React, { useEffect, useState } from 'react';

export const usePagination = (query: string, pageNumber: number) => {
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {}, [query, pageNumber]);
	return (
		<>
			ola ao
			<div />
		</>
	);
};
