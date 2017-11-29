#!/bin/bash

curl --include --request GET https://bmcrmapp.herokuapp.com/users \
  --header "Authorization: Token token=$TOKEN"
