#!/bin/bash

curl --include --request GET https://bmcrmapp.herokuapp.com/users/$ID \
  --header "Authorization: Token token=$TOKEN"
