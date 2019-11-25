# Advent of code 2019

## Up and running

```shell script
docker-compose up -d
docker-compose run --rm npm install
```

## Exec test

``` docker-compose run --rm npm test src/day[X]/test.ts```

## Exec Day

```docker-compose run --rm npm run exec src/day[X]/index.ts```