## Prerequisite

Node
```sh
brew install nvm npx
```

Install Ganache-Cli

```sh
npm i -g ganache-cli
```

Install Yarn

```sh
brew install yarn
```

Install Graph

```sh
# NPM
npm install -g @graphprotocol/graph-cli
```

Docker

## Installing and Running

### Step 1

Clone this repo

```sh
git clone git@github.com:Sixergame/scoutx-subgraph.git
```

### Step 2

Run Ganache-Cli

```sh
ganache-cli -h 0.0.0.0 -d -l=15000000
```

### Step 3

Clone and Run local graph node

```sh
docker-compose up
```

### Step 4

Install npm packges

```sh
npm i
```

### Step 5

Run subgraph

```sh
chmod +x ./start.sh
./start.sh
```

## Query

- Players

  ```sh
  {
      players(first: 1000) {
        id
        currentLongTokenPrice
        currentShortTokenPrice
        questionId
        trade(where: { timestamp_lt: "1647450015" }, first: 1, orderBy: timestamp, orderDirection: desc) {
          id
          longTokenPrice
          shortTokenPrice
          timestamp
          questionId
          fpmm {
            id
          }
        }
      }
    }
  Replace timestamp_lt value
  ```

- User Profit & Loss Data

  ```
    query getUserPnl {
      userPlayerHoldings(where :{userId : "0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1"}, subgraphError:allow){
        questionId
        tours{
          id
          userId
          questionId
          investmentAmount
          fpmmId
          outcomeIndex
          tokens
          player{
            currentLongTokenPrice
            currentShortTokenPrice
          }
        }
      }
    }
  ```

  Replace userId

## Debug

- In case of your graph-node exit with `admin_subgraph_graph-node_1 exited with code 137` try restarting the graph-node container
- To delete your old containers
  - ```sh
    docker rm $(docker ps -a -q)
    ```

```

```

## To be reviewed

- event Transfer in FPMM
