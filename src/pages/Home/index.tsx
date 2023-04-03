import React, { useState } from "react";

import { useQuery } from "react-query";
import { getAllCharacters } from "api/characters";

import { OrdenationType } from "utils/ordenation";
import useSortableData from "hooks/useSortableData";

import Header from "components/Header";
import Character from "components/Cards/Character";

import { Container, Wrapper } from "./styles";

export const Home = () => {
	const [name, setName] = useState("");
	const [page, setPage] = useState(1);
	const [ordenation, setOrdenation] = useState<OrdenationType>();

	const { data, isLoading } = useQuery(["characters", name, page], () =>
		getAllCharacters(name, page)
	);

	const sortedData = useSortableData(data, ordenation, Character);

	return (
		<Container>
			<Header name={setName} page={setPage} ordenation={setOrdenation} />
			{isLoading ? (
				<div>Loading...</div>
			) : (
				data && (
					<>
						<Wrapper>{data && sortedData}</Wrapper>
					</>
				)
			)}
		</Container>
	);
};
