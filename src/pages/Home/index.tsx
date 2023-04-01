import React, { useState } from "react";

import { useQuery } from "react-query";
import { getAllCharacters } from "api/characters";

import { OrdenationType, sortData } from "utils/ordenation";

import Character from "components/Character";

import { BiSortDown, BiSortUp } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Container, Wrapper } from "./styles";
import useDebounce from "hooks/useDebounce";
import useSortableData from "hooks/useSortableData";

import { CharacterI } from "api/@types/character";

export const Home = () => {
	const [name, setName] = useState("");
	const [page, setPage] = useState(1);
	const [ordenation, setOrdenation] = useState<OrdenationType>();

	const { data, isLoading } = useQuery(["characters", name, page], () =>
		getAllCharacters(name, page)
	);

	const debounceChange = useDebounce(setName, 1000);

	const sortedData = useSortableData(data, ordenation, Character);

	return (
		<Container>
			<div className="actions">
				<input
					type="text"
					placeholder="Search for Breed"
					onChange={(e) => debounceChange(e.target.value)}
				/>
				<div>
					<button onClick={() => setOrdenation("ASC")}>
						<BiSortUp size={20} />
					</button>
					<button onClick={() => setOrdenation("DESC")}>
						<BiSortDown size={20} />
					</button>
				</div>

				<div>
					<button onClick={() => setPage((old) => Math.max(old - 1, 0))}>
						<BsArrowLeft size={20} />
					</button>
					<button onClick={() => setPage((old) => old + 1)}>
						<BsArrowRight size={20} />
					</button>
				</div>
			</div>
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
