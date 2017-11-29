#!/bin/bash

  API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com}"
  URL_PATH="games/${ID}"

  curl "${API}${URL_PATH}" \
    --include \
    --request PATCH \
    --header "Content-Type: application/json" \
    --data '{
        "game": {
          "id": "'"${ID}"'",
          "cells": "'"${CELLS}"'",
          "over": "'"${OVER}"'",
          "player_x": {
            "id": "'"${ID}"'",
            "email": "'"${EMAIL}"'"
          },
          "player_o": {
            "id": "'"${ID}"'",
            "email": "'"${EMAIL}"'"
          }
        }

  echo
