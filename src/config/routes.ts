const routes = {
	home: "/",
	locations: "/locations",
	episodes: "/episodes",
	location: (id?: number) => `/location/${id || ""}`,
};

export default routes;
