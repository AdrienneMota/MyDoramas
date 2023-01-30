# MyDoramas

# Rotas de Categorias

POST: /category'

- Body: 
 - {
  "name" : "comedia escolar"
}

GET: '/categories'

# Rotas de Doramas

POST /dorama
- body: 
    - {
    "name" : "doramateste",
    "overview" : "teste",
    "grade" : 5,
    "category_id" : 3,
    "watched" : false
}

GETS

- /doramas
- doramas/watched
- /doramas/dontwatched

# Rotas de personagens
POST /character
- body: 
    - {
    "name" : "doramateste",
    "overview" : "teste",
    "grade" : 5,
    "category_id" : 3,
    "watched" : false
}

GETS

- /character
- /character/update
- /character/:id

