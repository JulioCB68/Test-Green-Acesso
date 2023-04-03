import React from "react";

import Link from "next/link";
import routes from "config/routes";

import { LocationI } from "api/@types/location";

import Favorite from "components/Favorites";

import { BiWorld } from "react-icons/bi";

import { Container } from "./styles";

interface ILocationProps {
	data?: LocationI;
}

const Location: React.FC<ILocationProps> = ({ data }) => {
	return (
		<Container>
			<Link href={routes.location(data?.id)}>
				<BiWorld size={34} />
				<h3>{data?.name} </h3>
				<p>{data?.type}</p>
				<p>{data?.dimension}</p>
			</Link>
			<Favorite favoriteId={data?.id ?? 0} category="location" />
		</Container>
	);
};

export default Location;
