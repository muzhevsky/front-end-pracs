package serverMain

import "net/http"

func (server *Server) ConfigureRouter() {
	server.router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write(server.GetDatabaseHandler().GetDefaultRepository().GetAlbums())
	})
}
