# FRIGO-server


Relevant endpoints SERVER

| Route                                               | HTTP Verb  | Description                     |
| --------------------------------------------------- | ---------- | ------------------------------- |
| `/api/auth/signup`                                  | POST       | SIGNUP                          |
| `/api/auth/login`                                   | POST       | LOGIN                           |
| `/api/auth/login`                                   | POST       | LOGIN                           |
| `/api/auth/:user_id/edit`                           | POST       | VERIFY TOKEN                    |
| `/api/recipes/create`                               | POST       | CREATE RECIPE IN DATABASE       |
| `/api/recipes/:recipe_id/edit`                      | POST       | UPDATE RECIPE IN DATABASE       |
| `/api/recipes/:recipe_id/information`               | GET        | GET ONE RECIPE FROM DATABASE    |
| `/api/recipes/complexSearch?query=query`            | GET        | GET RECIPE BY CATEGORY          |
| `/api/recipes/findByIngredients?ingredients=query`  | GET        | GET RECIPE BY INGREDIENT        |


<!-- PREGUNTAR SI ES NECESARIO QUE NUESTRAS RUTAS SEAN IGUALES A LAS DE LA LLAMADA A LA API -->

