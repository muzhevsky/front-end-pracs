package main

import (
	"F/Education/SSTU/Front-end/course2/prac3/database"
	serverMain "F/Education/SSTU/Front-end/course2/prac3/server"
	"github.com/BurntSushi/toml"
)

func main() {
	server := serverMain.Server{}
	serverParams := serverMain.ServerParams{}
	databaseDto := database.DatabaseParams{}
	toml.DecodeFile("config/serverConfig.toml", &serverParams)
	toml.DecodeFile("config/databaseConfig.toml", &databaseDto)

	databaseClient := database.CreateMongoClient(databaseDto)
	databaseHandler := &database.DatabaseHandler{}
	databaseHandler.InitHandler(databaseClient)

	server.Initialize(&serverParams, databaseHandler)
	server.Start()
}
