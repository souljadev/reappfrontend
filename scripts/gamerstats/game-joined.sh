#!/bin/bash

curl --include --request PATCH https://aqueous-atoll-85096.herokuapp.com/games/$ID \
  --header "Authorization: Token token=$TOKEN"
