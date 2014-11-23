package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/isomorphic/", http.StripPrefix("/isomorphic/", http.FileServer(http.Dir("isomorphic"))))
	http.Handle("/bower_components/", http.StripPrefix("/bower_components/", http.FileServer(http.Dir("bower_components"))))
	http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("app"))))
	log.Println("Listening...")
	http.ListenAndServe(":3000", nil)
}
