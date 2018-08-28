"use strict";

var Gremlin = require('gremlin');
var config = require("./config");
var async = require('async');

const client = Gremlin.createClient(
    443, 
    config.endpoint, 
    { 
        "session": false, 
        "ssl": true, 
        "user": `/dbs/${config.database}/colls/${config.collection}`,
        "password": config.primaryKey
    }
);


function dropGraph(callback)
{
    console.log('Running Drop');
    client.execute('g.V().drop()', { }, (err, results) => {
        if (err) {
            return callback(console.error(err));
        }

        console.log("Result: %s\n", JSON.stringify(results));
        callback(null)
    });
}

function addVertex1(callback)
{
    console.log('Running Add Vertex1'); 
    client.execute("g.addV(label).property('id', id).property('firstName', firstName).property('age', age).property('userid', userid)", 
    { label:"person", id:"thomas", firstName:"Thomas", age:44, userid: 1}, 
    (err, results) => {
        if (err) {
            return callback(console.error(err));
        }

        console.log("Result: %s\n", JSON.stringify(results));
        callback(null)
    });
}

function addVertex2(callback)
{
    console.log('Running Add Vertex2'); 
    client.execute("g.addV(label).property('id', id).property('firstName', firstName).property('lastName', lastName).property('age', age).property('userid', userid)", 
    { label:"person", id:"mary", firstName:"Mary", lastName: "Andersen", age:39, userid: 2}, 
    (err, results) => {
        if (err) {
            return callback(console.error(err));
        }

        console.log("Result: %s\n", JSON.stringify(results));
        callback(null)
    });
}

function addEdge(callback)
{
    console.log('Running Add Edge'); 
    client.execute("g.V(source).addE(relationship).to(g.V(target))", 
    {source:"thomas", relationship:"knows", target:"mary"}, 
    (err, results) => {
        if (err) {
            return callback(console.error(err));
        }

        console.log("Result: %s\n", JSON.stringify(results));
        callback(null)
    });
}

function countVertices(callback)
{
    console.log('Running Count');
    client.execute("g.V().count()", { }, (err, results) => {
    if (err) {
        return callback(console.error(err));
    }

    console.log("Result: %s\n", JSON.stringify(results));
    callback(null)
});
}

function finish(err, result)
{
    if (err) {
        return console.error(err);
    }
    console.log("Finished");
    console.log('Press any key to exit');
    
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', process.exit.bind(process, 0));
}

async.waterfall([
    dropGraph,
    addVertex1,
    addVertex2,
    addEdge,
    countVertices
], finish);
