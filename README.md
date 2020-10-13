Clone the repo.

Perform npm install

npm start

Config file added in the app.

Assumptions: 

botId, conversationId and message is provided by the client. And validation is added for the same.

Curl reqeust for intent from Server 1

curl --location --request POST 'http://localhost:3000/intent' \
--header 'Content-Type: application/json' \
--data-raw '{
  "botId": "5f74865056d7bb000fcd39ff",
  "message": "Hello this is a chat message",
  "conversationId": "1234567890"
}'
