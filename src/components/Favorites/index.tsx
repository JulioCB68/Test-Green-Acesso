import React, { useContext } from "react";

import FavoriteContext, { Favorite } from "context/FavoriteContext";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { Container } from "./styles";

interface FavoritesProps {
	favoriteId: number;
	category: "character" | "episode" | "location";
}

const Favorite: React.FC<FavoritesProps> = ({ favoriteId, category }) => {
	const { favorites, toggleFavorite } = useContext(FavoriteContext);

	const isFav = favorites.some(
		(favorite: Favorite) =>
			favorite.category === category && favorite.id === favoriteId
	);

	const handleToggleFavorite = () => {
		toggleFavorite(favoriteId, category);
	};
	return (
		<Container
			onClick={() => {
				handleToggleFavorite();
			}}
		>
			{isFav && <AiFillStar color="gold" />}
			{!isFav && <AiOutlineStar color="gold" />}
		</Container>
	);
};

export default Favorite;
