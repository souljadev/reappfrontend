#!/bin/bash


curl --include --request PATCH https://aqueous-atoll-85096.herokuapp.com/games/ \
  --header "Authorization: Token token=$TOKEN"


  #!/bin/bash
  API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
    URL_PATH="/games/"

    curl "${API}${URL_PATH}"\
      --include \
      --request POST \
      --header "Content-type: application/json" \
      --header "Authorization: Token token=${TOKEN}" \
      --data '{
        "game": {
          "id": "'"${ID}"'",,
          "cells": ["", "", "", "", "", "", "", "", ""],
          "over": "'"${OVER}"'",,
          "player_x": {
            "id": "'"${ID}"'",
            "email": "'"${EMAIL}"'"
          },
          "player_o": "'"${PLAYER_O}"'",
        }
      }'

    echo
