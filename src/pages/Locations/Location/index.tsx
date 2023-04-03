/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import routes from "config/routes";

import { useQuery } from "react-query";
import { getSingleLocations } from "api/locations";
import { getMultipleCharacters } from "api/characters";

import { extractNumbersFromUrls } from "utils/extractNumbersFromUrls";

import { FiArrowLeft } from "react-icons/fi";

import { Container, Wrapper } from "./styles";

const Location: React.FC = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data, isLoading } = useQuery(["location", id], () =>
		getSingleLocations(id as unknown as number)
	);

	const [numbers, setNumbers] = useState<string[]>([]);

	const { data: dataCharacters, isLoading: dataCharactersLoading } = useQuery(
		["locations-characters-data", numbers],
		() => getMultipleCharacters(numbers),
		{
			onSuccess: () => {
				if (data?.residents) {
					const extractedNumbers = extractNumbersFromUrls(data.residents);
					setNumbers(extractedNumbers);
				}
			},
		}
	);

	return (
		<Container>
			<div>
				<Link href={routes.locations}>
					<FiArrowLeft size={24} />
				</Link>
				<Wrapper>
					<h1>{data?.name}</h1>
					<div>
						<p>Type:</p>
						<p>{data?.type}</p>
					</div>
					<div>
						<p>Dimension:</p>
						<p>{data?.dimension}</p>
					</div>
					<p> Residents: </p>
					<div className="teste">
						{/* Essa verificação 'Array.isArray(dataCharacters) &&'
						garante que o método map() só será chamado se dataCharacters for um array
						evitando o erro dataCharacters.map is not a function */}
						{Array.isArray(dataCharacters) &&
							dataCharacters?.map((item, index) => (
								<div key={index}>
									<img
										className={`character-image`}
										src={item?.image}
										alt="Character"
									/>
								</div>
							))}
					</div>
				</Wrapper>
			</div>
		</Container>
	);
};

export default Location;
