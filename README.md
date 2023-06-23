# book-crud-app

## Frontend

Do uruchomienia frontendu wymagany jest node.js oraz npm
Frontend znajduje się w katalogu src/webapp/book-crud-app-frontend
Uruchamiamy terminal w w/w katalogu i przy pierwszym uruchomieniu najpierw wprowadzamy polecenie npm install, a następnie npm start.
W celu zbudowania paczki produkcyjnej nalezy wpisac polecenie npm build, utworzony zostanie katalog z paczką gotową do wrzucenia na serwer.

## Backend

Dostępne w aplikacji endpointy, mozna przejrzec pod adresem: http://localhost:8080/swagger-ui/index.html, zbudowana w ten sposob dokumentacja pozwala na poznanie:

- odpowiedniego url
- metody HTTP
- oraz ewentualnego body w raz z walidacja/parametrow

Zbudodowanie aplikacji mozliwie jest poprzez polecenie mvn clean install uruchomione w terminalu w glownym katalogu projektu
Do uruchomienia aplikacji wymagana jest Java w wersji 17
