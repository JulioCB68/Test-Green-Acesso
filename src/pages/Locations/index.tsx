import React, { useState } from "react";

import { useQuery } from "react-query";
import { getAllLocations } from "api/locations";

import useSortableData from "hooks/useSortableData";
import { OrdenationType } from "utils/ordenation";

import Header from "components/Header";
import Location from "components/Location";

import { Container, Wrapper } from "./styles";

const Locations: React.FC = () => {
	const [name, setName] = useState("");
	const [page, setPage] = useState(1);
	const [ordenation, setOrdenation] = useState<OrdenationType>();

	const { data, isLoading } = useQuery(["locations", page, name], () =>
		getAllLocations(name, page)
	);

	const sortedData = useSortableData(data, ordenation, Location);

	return (
		<Container>
			<Header name={setName} page={setPage} ordenation={setOrdenation} />
			<Wrapper>{sortedData}</Wrapper>
		</Container>
	);
};

export default Locations;
