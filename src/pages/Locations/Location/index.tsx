import React from "react";
import { useRouter } from "next/router";

import { useQuery } from "react-query";
import { getSingleLocations } from "api/locations";

import { Container } from "./styles";
import Link from "next/link";
import routes from "config/routes";

const Location: React.FC = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data, isLoading } = useQuery(["location", id], () =>
		getSingleLocations(id as unknown as number)
	);

	console.log(data);
	return (
		<Container>
			{/* <Link key={data?[0].} href={routes.location(item.id)}>
				<div>{item.name}</div>
			</Link> */}
			<div>
				<h1>Location: {id}</h1>
				{data?.name}
			</div>
		</Container>
	);
};

export default Location;
