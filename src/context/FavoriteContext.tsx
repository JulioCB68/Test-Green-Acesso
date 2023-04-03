import React, { ReactNode, createContext, useState } from "react";

interface FavoriteContextProps {
	children: ReactNode;
}

export interface Favorite {
	id: number;
	category: "character" | "episode" | "location";
}

interface FavoriteContextI {
	favorites: Favorite[];
	setFavorites: (newState: Favorite[]) => void;
	toggleFavorite: (
		id: number,
		category: "character" | "episode" | "location"
	) => void;
	getFavoritesByCategory: (
		category: "character" | "episode" | "location"
	) => Favorite[];
}

const initialValue: FavoriteContextI = {
	favorites: [],
	setFavorites: () => {},
	toggleFavorite: () => {},
	getFavoritesByCategory: () => [],
};

const FavoriteContext = createContext<FavoriteContextI>(initialValue);

export const FavoriteContextProvider = ({ children }: FavoriteContextProps) => {
	const [favorites, setFavorites] = useState<Favorite[]>(
		initialValue.favorites
	);

	//Função que atualiza o estado do contexto com uma nova lista de favoritos.
	const handleSetFavorites = (newState: Favorite[]) => {
		setFavorites(newState);
	};

	//Função que adiciona ou remove um item da lista de favoritos, verificando se já existe na lista
	//e removendo-o caso já esteja presente, ou adicionando-o caso ainda não esteja presente
	const toggleFavorite = (
		id: number,
		category: "character" | "episode" | "location"
	) => {
		//Buscar na lista de favoritos um item com o mesmo id e category.
		const favoriteIndex = favorites.findIndex(
			(favorite) => favorite.id === id && favorite.category === category
		);

		//Se o item já está na lista de favoritos, a função cria uma nova lista (newFavorites) e remove o item da lista (splice)
		//em seguida, chama a função handleSetFavorites para atualizar o estado da lista de favoritos.
		if (favoriteIndex >= 0) {
			const newFavorites = [...favorites];
			newFavorites.splice(favoriteIndex, 1);
			handleSetFavorites(newFavorites);
		}

		//Se o item não está na lista de favoritos, a função cria um novo objeto (newFavorite) e adiciona o novo objeto newFavorite ao final da lista
		//em seguida, chama handleSetFavorites para atualizar o estado da lista de favoritos.
		else {
			const newFavorite = { id, category };
			handleSetFavorites([...favorites, newFavorite]);
		}
	};

	//Função que retorna uma lista de favoritos com base na categoria especificada
	const getFavoritesByCategory = (
		category: "character" | "episode" | "location"
	) => {
		return favorites.filter((favorite) => favorite.category === category);
	};

	return (
		<FavoriteContext.Provider
			value={{
				favorites,
				setFavorites: handleSetFavorites,
				toggleFavorite,
				getFavoritesByCategory,
			}}
		>
			{children}
		</FavoriteContext.Provider>
	);
};

export default FavoriteContext;
