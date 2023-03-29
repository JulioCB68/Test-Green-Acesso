import React from "react";

import { Container, Aside, Content } from "./styles";

import { BiUser, BiMoviePlay, BiWorld } from "react-icons/bi";
import Link from "next/link";
import routes from "../config/routes";

interface ITemplateProps {
	children: React.ReactNode;
}

export const Template = ({ children }: ITemplateProps) => {
	return (
		<Container>
			<Aside>
				<Link href={routes.home} className="side-icons">
					<BiUser size={30} />
				</Link>
				<Link href={routes.locations} className="side-icons">
					<BiWorld size={30} />
				</Link>
				<Link href={routes.episodes} className="side-icons">
					<BiMoviePlay size={30} />
				</Link>
			</Aside>
			<Content>{children}</Content>
		</Container>
	);
};
