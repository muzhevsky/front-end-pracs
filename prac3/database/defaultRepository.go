package database

import (
	"F/Education/SSTU/Front-end/course2/prac3/dto"
	"context"
	"encoding/json"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type DefaultDatabaseRepository struct {
	client *mongo.Client
}

func (repository *DefaultDatabaseRepository) InitRepository(client *mongo.Client) {
	repository.client = client
}

func (repository *DefaultDatabaseRepository) GetAlbums() []byte {
	usersCollection := repository.client.Database("musicPlatform").Collection("albums")
	cursor, err := usersCollection.Find(context.TODO(), bson.D{}, nil)
	var results []bson.M
	if err = cursor.All(context.TODO(), &results); err != nil {
		panic(err)
	}

	json, _ := json.Marshal(results)
	return json
}

func (repository *DefaultDatabaseRepository) AddNewAlbum(albumJson []byte) {
	var albumDto *dto.AlbumDto
	json.Unmarshal(albumJson, albumDto)
}
