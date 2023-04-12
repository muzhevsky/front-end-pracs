package dto

type AlbumDto struct {
	Name    string `json:"name"`
	Authors []int  `json:"authorId"`
	Label   int    `json:"labelId"`
	Genres  []int  `json:"genresIds"`
	Tracks  []int  `json:"trackIds"`
	// pic
	// listeners count
	// like count
	// date of publish
	// full duration
	// age rating
}
