# project2-simulation


### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user | User Signup         | `username' 'email' 'password'                  | {msg: string, token: token }
POST   | /auth/login      | -     | user | Login               | `email`, `password`                            | `token`
