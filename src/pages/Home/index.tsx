import React from "react";

import { Container } from "./styles";
import { getAllCharacters } from "api/characters";
import { useQuery } from "react-query";
import Character from "components/Character";

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
