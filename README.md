---
services: cosmos-db
platforms: nodejs
author: lbosq
---

# Developing a Node.js app with Gremlin Graph Data using Azure Cosmos DB
Azure Cosmos DB is a globally distributed multi-model database. One of the supported APIs is the Graph (Gremlin) API, which provides a graph data model with [Gremlin query/traversals](https://tinkerpop.apache.org/gremlin.html). This sample shows you how to use the Azure Cosmos DB with the Graph API to store and access data from a Node.js application.

## Running this sample

* Before you can run this sample, you must have the following prerequisites:

	* An active Azure Cosmos DB account - If you don't have an account, refer to the [Build a Node.js application by using Graph API](https://docs.microsoft.com/en-us/azure/cosmos-db/create-graph-nodejs) article.
	* [Node.js](https://nodejs.org/en/) version v0.10.29 or higher.
	* [Git](http://git-scm.com/).

* Then, clone this repository using `git clone https://github.com/Azure-Samples/azure-cosmos-db-graph-nodejs-getting-started.git`

* Next, substitute the graph endpoint (`*.graphs.azure.com`), your database and collection (graph) values, and primary master key in `config.js` with your Cosmos DB account's values. 

* From a command prompt or shell, run `npm install` from the root directory to install the gremlin-javascript and async modules, and their dependencies.

* From a command prompt or shell, run `node app.js` to run the application and follow the instructions.

## About the code
The code included in this sample is intended to get you quickly started with a Node.js application that connects to Azure Cosmos DB with the Graph (Gremlin) API.

## More information

- [Azure Cosmos DB](https://docs.microsoft.com/azure/cosmos-db/introduction)
- [Azure Cosmos DB : Graph API](https://docs.microsoft.com/azure/documentdb/graph-introduction)
- [Gremlin Node.js on NPM](https://www.npmjs.com/package/gremlin)
- [Gremlin Node.js Source](https://github.com/jbmusso/gremlin-javascript)

