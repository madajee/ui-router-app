curl -X GET \
-H "X-Parse-Application-Id: QnNPJ4bOcm8hYDzIAtmZJKVm5kGQ7Db8eTNKtmds" \
-H "X-Parse-REST-API-Key: 6RViXVAk0JqXwyKPWARuNGRXT5BXlpP4gyArT3qO" \
https://parseapi.back4app.com/serverInfo


curl -X GET \
-H "X-Parse-Application-Id: QnNPJ4bOcm8hYDzIAtmZJKVm5kGQ7Db8eTNKtmds" \
-H "X-Parse-REST-API-Key: 6RViXVAk0JqXwyKPWARuNGRXT5BXlpP4gyArT3qO" \
https://parseapi.back4app.com/login?password=test&username=admin


curl -X POST \
-H "X-Parse-Application-Id: QnNPJ4bOcm8hYDzIAtmZJKVm5kGQ7Db8eTNKtmds" \
-H "X-Parse-REST-API-Key: 6RViXVAk0JqXwyKPWARuNGRXT5BXlpP4gyArT3qO" \
-H "X-Parse-Revocable-Session: 1" \
-H "Content-Type: application/json" \
-d "{ \"password\":\"test\", \"username\": \"admin\",\"email\": \"admin@test.com\" }" \
https://parseapi.back4app.com/users


curl -X POST \
-H "X-Parse-Application-Id: QnNPJ4bOcm8hYDzIAtmZJKVm5kGQ7Db8eTNKtmds" \
-H "X-Parse-REST-API-Key: 6RViXVAk0JqXwyKPWARuNGRXT5BXlpP4gyArT3qO" \
-H "Content-Type: application/json" \
-d '{"room":"basement"}' \
https://parseapi.back4app.com/classes/stuff

curl -X GET \
-H "X-Parse-Application-Id: QnNPJ4bOcm8hYDzIAtmZJKVm5kGQ7Db8eTNKtmds" \
-H "X-Parse-REST-API-Key: 6RViXVAk0JqXwyKPWARuNGRXT5BXlpP4gyArT3qO" \
https://parseapi.back4app.com/classes/stuff


var baseURL = "https://parseapi.back4app.com/";
            //var baseURL = "https://api.parse.com/1/";