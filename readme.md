## Json Web Token
>- A way to exchange data between two partners. Ensure integrity of the data.

Client --> Login Request Server
       <--- Response + Signed JWT

Client --> Request + Signed JWT
       <-- Response


HTTP  is stateless: the server does not remember any previous request. 

JSON Web Token consists of three parts separated by dots (.), which are:

* Header
* Payload
* Signature 


`npm install jsonwebtoken`