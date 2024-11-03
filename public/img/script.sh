#!/bin/bash

curl https://ibb.co/JFDVVV4/c421e433ef95cbfc9287edd93ddd2ddb | grep -o ‘<a .href=["‘"‘"‘].["‘"‘"‘]‘ | grep -o ‘["‘"‘"‘][^"‘"‘"‘]*["‘"‘"‘]‘ | sed -e ‘s/^["‘"‘"‘]//i‘ -e ‘s/["‘"‘"‘]$//i‘

curl https://ibb.co/JFDVVV4/c421e433ef95cbfc9287edd93ddd2ddb | grep -o ‘<a .href=["‘"‘"‘].["‘"‘"‘]‘
