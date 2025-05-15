# BooksApp

A full-stack web application for managing books, authors, and wishlists, featuring a modern frontend with React + Material UI, a secure backend with Spring Boot, and a PostgreSQL database running in Docker.

---

## Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Security (with role-based access)
- Spring Data JPA
- PostgreSQL (via Docker)
- Swagger UI for API documentation

### Frontend
- React
- Material UI (MUI)
- Axios

### Database
- PostgreSQL 17.4 in Docker Compose
- Preloaded schema + data
- Materialized Views for reporting

---

## Features

- User roles: `ROLE_LIBRARIAN`, `ROLE_USER`
- Book catalog with categories
- Author and country management
- Wishlist per user
- Materialized views:
  - Books by Author
  - Authors by Country
- Swagger documentation at `/swagger-ui.html`

---

## Demo & Access

- Swagger UI available at `/swagger-ui.html`  
- Sample users:  
  - **lib** / **lib** (Librarian)  
  - **user** / **user** (User)

