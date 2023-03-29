import React from "react";

import { Container } from "./styles";

interface IStatusIcon {
	status: string | undefined;
}

const StatusIcon: React.FC<IStatusIcon> = ({ status }) => {
	return (
		<Container>
			<div className={status} />
		</Container>
	);
};

export default StatusIcon;
