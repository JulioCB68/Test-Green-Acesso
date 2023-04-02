import React from "react";

import { OrdenationType } from "utils/ordenation";

import useDebounce from "hooks/useDebounce";

import { BiSortDown, BiSortUp } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Container } from "./styles";

interface IHeaderProps {
	name: Function;
	page: Function;
	ordenation: Function;
}

const Header: React.FC<IHeaderProps> = ({ name, page, ordenation }) => {
	const debounceChange = useDebounce(name, 1000);

	return (
		<Container>
			<div className="actions">
				<input
					type="text"
					placeholder="Search..."
					onChange={(e) => debounceChange(e.target.value)}
				/>
				<div className="desk">
					<button onClick={() => ordenation("ASC")}>
						<BiSortUp size={20} />
					</button>
					<button onClick={() => ordenation("DESC")}>
						<BiSortDown size={20} />
					</button>
				</div>

				<div className="desk">
					<button onClick={() => page((old: number) => Math.max(old - 1, 0))}>
						<BsArrowLeft size={20} />
					</button>
					<button onClick={() => page((old: number) => old + 1)}>
						<BsArrowRight size={20} />
					</button>
				</div>

				<div className="mobile">
					<button onClick={() => page((old: number) => Math.max(old - 1, 0))}>
						<BsArrowLeft size={20} />
					</button>
					<button onClick={() => ordenation("ASC")}>
						<BiSortUp size={20} />
					</button>
					<button onClick={() => ordenation("DESC")}>
						<BiSortDown size={20} />
					</button>
					<button onClick={() => page((old: number) => old + 1)}>
						<BsArrowRight size={20} />
					</button>
				</div>
			</div>
		</Container>
	);
};

export default Header;
