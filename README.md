---
services: cosmos-db
platforms: nodejs
author: arramac
---

# Developing a Node.js app with Gremlin Graph Data using Azure Cosmos DB
Azure Cosmos DB is a globally distributed multi-model database. One of the supported APIs is the Graph (Gremlin) API, which provides a graph data model with [Gremlin query/traversals](https://tinkerpop.apache.org/gremlin.html). This sample shows you how to use the Azure Cosmos DB with the Graph API to store and access data from a Node.js application.

## Running this sample

* Before you can run this sample, you must have the following prerequisites:

	* An active Azure DocumentDB account - If you don't have an account, refer to the [Create a DocumentDB account](https://azure.microsoft.com/en-us/documentation/articles/documentdb-create-account/) article.
	* [Node.js](https://nodejs.org/en/) version v0.10.29 or higher.
	* [Git](http://git-scm.com/).

* Then, clone this repository using `git clone git@github.com:arramac/azure-cosmosdb-graph-nodejs-getting-started.git`

* Next, substitute the graph endpoint (`*.graphs.azure.com`) and primary master key in `config.js` with your Cosmos DB account's values. 

* From a command prompt or shell, run `npm install gremlin-secure` to resolve dependencies. This is private version of the gremlin module which has added support for SSL and SASL, which are required for Azure Cosmos DB, but not supported by the existing gremlin module (until the changes are accepted and merged into the gremlin module).

* From a command prompt or shell, run `node app.js` to run the application.

## About the code
The code included in this sample is intended to get you quickly started with a Node.js application that connects to Azure Cosmos DB with the Graph (Gremlin) API.

## More information

- [Azure Cosmos DB](https://docs.microsoft.com/azure/cosmos-db/introduction)
- [Azure Cosmos DB : Graph API](https://docs.microsoft.com/azure/documentdb/graph-introduction)
- [Gremlin Node.js on NPM](https://www.npmjs.com/package/gremlin)
- [Gremlin Node.js Source](https://github.com/CosmosDB/gremlin-javascript)

