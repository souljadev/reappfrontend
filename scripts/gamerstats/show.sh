#!/bin/bash

curl --include --request GET https://aqueous-atoll-85096.herokuapp.com/games/$ID \
  --header "Authorization: Token token=$TOKEN"

# token only
