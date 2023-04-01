import React from "react";
import { OrdenationType, sortData } from "utils/ordenation";

const useSortableData = (
	data: any,
	ordenation: OrdenationType,
	Component: React.ComponentType<any>
) => {
	const handleOrder =
		data &&
		sortData(data, ordenation).map((item) => (
			<Component key={item.id} data={item} />
		));
	return handleOrder;
};

export default useSortableData;
