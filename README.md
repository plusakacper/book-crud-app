# Book CRUD Application (ENG)

A CRUD web application for managing books and authors.

## Technologies:
This project uses:
- Java 17
- Spring Boot 3.1.0
- Maven
- H2 database
- React

## Installation:
### Frontend

To run the frontend you need `node.js` and  `npm`. Follow these steps:
- open terminal in directory: `src/webapp/book-crud-app-frontend`,
- first time you run it, enter the command:
```bash
  npm install
``` 
- then and every time you start the application:
```bash
  npm start
``` 
To build the production package, enter the command:
```bash
  npm build
``` 

### Backend

To run the backend:
- open terminal in the project's main directory,
- enter the command:
```bash
  mvn clean install
``` 

## Swagger UI:

The API endpoints can be explored and tested at:
http://localhost:8080/swagger-ui/index.html.

It generates HTML pages that display the API endpoints, request/response examples, and allows users to make requests directly from the documentation.

&nbsp;

# Aplikacja Book CRUD (PL)

Aplikacja internetowa do zarządzania książkami i autorami.

## Technologie:
Ten projekt wykorzystuje:
- Java 17
- Spring Boot 3.1.0
- Maven
- Baza danych H2
- React

## Instalacja:
### Frontend

Do uruchomienia frontendu wymagane są `node.js` i `npm`. Wykonaj następujące kroki:
- otwórz terminal w katalogu: `src/webapp/book-crud-app-frontend`,
- przy pierwszym uruchomieniu wykonaj polecenie:
```bash
  npm install
``` 
- następnie i przy każdym kolejnym uruchomieniu aplikacji:
```bash
  npm start
``` 
Aby zbudować pakiet produkcyjny, wykonaj polecenie:
```bash
  npm build
``` 

### Backend

Aby uruchomić backend:
- otwórz terminal w głównym katalogu projektu,
- wykonaj polecenie:
```bash
  mvn clean install
``` 

## Swagger UI:

Endpointy API dostępne w aplikacji można przeglądać i testować pod adresem:
http://localhost:8080/swagger-ui/index.html.

Interfejs Swagger UI pozwala na wizualizację zasobów API i korzystanie z nich bez konieczności posiadania zewnętrznych aplikacji.