# Person API

Welcome to the Person API documentation. This API provides basic CRUD operations for managing person records in a PostgreSQL database.

## Table of Contents

- [Endpoints](#endpoints)
- [Request and Response Formats](#request-and-response-formats)
- [Sample Usage](#sample-usage)
- [Known Limitations](#known-limitations)
- [Setup and Deployment](#setup-and-deployment)

## Endpoints

### 1. Create a New Person

- **Endpoint**: POST `/api/persons`
- **Request Format**:

  ```json
  {
    "name": "John Doe",
    "age": 30
  }

Retrieve a Person by ID

{
  "id": 1,
  "name": "John Doe",
  "age": 30
}

Update an Existing Person by ID

    Endpoint: PUT /api/persons/:id

    Request Format:

    json

{
  "name": "Jane Doe",
  "age": 35
}

Response Format:

json

    {
      "id": 1,
      "name": "Jane Doe",
      "age": 35
    }

4. Delete a Person by ID

    Endpoint: DELETE /api/persons/:id
    Response: HTTP status 204 (No Content)

Sample Usage

Here are some sample API requests and expected responses:
Create a New Person

    Request:

    shell

curl -X POST -H "Content-Type: application/json" -d '{"name":"Alice","age":25}' http://localhost:3000/api/persons

Response:

json

    {
      "id": 2,
      "name": "Alice",
      "age": 25
    }

Retrieve a Person by ID

    Request:

    shell

curl http://localhost:3000/api/persons/2

Response:

json

    {
      "id": 2,
      "name": "Alice",
      "age": 25
    }

Update an Existing Person by ID

    Request:

    shell

curl -X PUT -H "Content-Type: application/json" -d '{"name":"Alice Smith","age":26}' http://localhost:3000/api/persons/2

Response:

json

{
  "id": 2,
  "name": "Alice Smith",
  "age": 26
}
