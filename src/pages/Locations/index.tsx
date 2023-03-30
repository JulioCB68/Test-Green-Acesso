import React from "react";

import { useQuery } from "react-query";
import { getAllLocations } from "api/locations";

import { BiWorld } from "react-icons/bi";

import { Container, Content } from "./styles";
import routes from "config/routes";
import Link from "next/link";

const Locations: React.FC = () => {
	const { data, isLoading } = useQuery("locations", getAllLocations);

	return (
		<Container>
			{data &&
				data?.map((item) => (
					<Link key={item.id} href={routes.location(item.id)}>
						<Content>
							<BiWorld size={50} />
							<div>{item.name}</div>
						</Content>
					</Link>
				))}
		</Container>
	);
};

export default Locations;
