package database

import "go.mongodb.org/mongo-driver/mongo"

type DatabaseHandler struct {
	defaultRepository *DefaultDatabaseRepository
}

func (handler *DatabaseHandler) InitHandler(client *mongo.Client) {
	handler.defaultRepository = &DefaultDatabaseRepository{}
	handler.defaultRepository.InitRepository(client)
}

func (handler *DatabaseHandler) GetDefaultRepository() *DefaultDatabaseRepository {
	return handler.defaultRepository
}
