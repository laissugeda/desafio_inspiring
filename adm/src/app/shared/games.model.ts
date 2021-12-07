export interface Games {
	dealID: string,
	dealRating: string,
	gameID: string,
	internalName: string,
	isOnSale: string,
	lastChange: number,
	metacriticLink: string,
	metacriticScore: string,
	normalPrice: string,
	releaseDate: number,
	salePrice: string,
	savings: string,
	steamAppID: string,
	steamRatingCount: string,
	steamRatingPercent: string,
	steamRatingText: string,
	storeID: string,
	thumb: string,
	title: string
}
export interface Ofertas{
	games: Games[]
}