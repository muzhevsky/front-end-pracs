package database

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func CreateMongoClient(params DatabaseParams) *mongo.Client {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(params.ConnectionString))
	if err != nil {
		panic(err)
	}

	return client
}

type Repository interface {
	InitRepository(client *mongo.Client)
}
