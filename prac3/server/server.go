package serverMain

import (
	"F/Education/SSTU/Front-end/course2/prac3/database"
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
)

type Server struct {
	adress          string
	router          *mux.Router
	httpClient      *http.Client
	databaseHandler *database.DatabaseHandler
}

func (server *Server) Initialize(dto *ServerParams, databaseHandler *database.DatabaseHandler) {
	if dto.Adress == "" {
		server.adress = "127.0.0.1"
	} else {
		server.adress = dto.Adress
	}

	if dto.Port == "" {
		server.adress += ":8081"
	} else {
		server.adress += dto.Port
	}

	server.router = mux.NewRouter()
	server.httpClient = &http.Client{}
	server.databaseHandler = databaseHandler
}

func (server *Server) Start() error {
	server.ConfigureRouter()
	fmt.Println("server is running")
	err := http.ListenAndServe(server.adress, server.router)

	return err
}

func (server *Server) GetDatabaseHandler() *database.DatabaseHandler {
	return server.databaseHandler
}
