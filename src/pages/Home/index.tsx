import React from "react";

import { useQuery } from "react-query";
import { getAllCharacters } from "api/characters";

import Character from "components/Character";

import { Container } from "./styles";

export const Home = () => {
	const { data, isLoading } = useQuery("characters", getAllCharacters);
	return (
		<>
			{isLoading ? (
				<Container />
			) : (
				data && (
					<>
						<Container>
							{data.map((item) => (
								<Character key={item.id} data={item} />
							))}
						</Container>
					</>
				)
			)}
		</>
	);
};
