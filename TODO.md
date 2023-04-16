- SERVICES create

- CONTROLLER

- ROUTER - POST /USER

- ADD UM NOVO USUARIO A TABELA

- CORPO {
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  // a imagem não é obrigatória
  }

\*não é possível cadastrar com o campo displayName menor que 8 caracteres 400
{
"message": "\"displayName\" length must be at least 8 characters long"
}

\*não é possível cadastrar com o campo email com formato inválido 400
{
"message": "\"email\" must be a valid email"
}

\*não é possível cadastrar com o campo password menor que 6 caracteres 400
{
"message": "\"password\" length must be at least 6 characters long"
}

\*não é possível cadastrar com um email já existente 409
{
"message": "User already registered"
}

\*é possível cadastrar um pessoa usuária com sucesso 201
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
