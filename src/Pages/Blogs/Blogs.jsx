import React from 'react';

const Blogs = () => {
    return (
        <div className='p-20'>
            <h1 className='text-center text-2xl font-bold my-5'>Q/A</h1>
            <div>

                <h4 className='font-bold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                <p>Access token: A token which contains all the information the server needs to know if the user / device can access the resource you are requesting or not is called access token. They are basically expired tokens with a short validity period.<br></br>
                    Refresh token: It is a token which is used to generate a new access token. If the access token has an expiration date, once it expires, the user would have to authenticate again to obtain an access token. 
                    A user with an access token can only access protected resources or perform specific actions for a set period of time. A refresh token allows the user to get a new access token without needing to log in again.
                    ---------------store------------------------------------
                </p>
                <br></br>
                <h4 className='font-bold'>2. Comparison between sql and noSql databases.</h4>
                <p>1.SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.<br></br>
                    2.SQL databases use a powerful language "Structured Query Language" to define and manipulate the data. SQL databases use a powerful language "Structured Query Language" to define and manipulate the data.<br></br>
                    3.MySQL, Oracle, Sqlite, PostgreSQL and MS-SQL etc. are the example of SQL database. MongoDB, BigTable, Redis, RavenDB, Cassandra, Hbase, Neo4j, CouchDB etc. are the example of nosql database</p>
                <br></br>
                <h4 className='font-bold'>3. What is express js? What is Nest JS?</h4>
                <p>Express is a Node.js web application framework. It provides various features to build web and mobile applications using javascript and provides a simple and intuitive API for building web applications with Node.js. It allows absolute beginners to get into web development.</p>
                <p>NestJS is a open-source framework for building Node.js server-side applications. It is based on TypeScript and JavaScript. It is a newer framework which provides built-in support for dependency injection, which makes it easier to manage dependencies</p>
                <br></br>
                <h4 className='font-bold'>4. What is MongoDB aggregate and how does it work?</h4>
                <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. It is used for calculate aggregate values for groups of documents.<br></br>
                    ---------------work----------------------?
                </p>


            </div>
        </div>
    );
};

export default Blogs;