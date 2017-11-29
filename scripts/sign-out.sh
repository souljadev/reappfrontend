#!/bin/bash

curl --include --request DELETE https://bmcrmapp.herokuapp.com/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN" \
