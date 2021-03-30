# Web Dev course

# Intro
This is a very broad overview of this course...
(and a excuse to test out reveal.js)

I'll cover a broad overview of the many terms you might have seen online. 
Terms - html, css, javascript, typescript, mongoDB, MySQL, NoSQL, Redis, postgre, ES6, ECMAScript, jQuery, REST, GraphQL, SOAP, Node, Express, npm, yarn, CRUD, Endpoints, salting, hashing, OAuth, React, Angular, Vue, Redux, Dom, VirtualDom, EJS, Hooks, Props, 

# The Web
How do websites actually work?
I want to find google.com, I ask my ISP and it asks a DNS server where that IP is, you get this ip and then you asks that server for the info.
216.58.210.46

HTML - structure (walls and toilet)
CSS - styling (painters and decorators)
JS - do things, have behaviour. (electricians, plumbing)
Seperation of concerns

# DOM tree
Look at a little bit of html, and see how it can look like a tree. This is known as the document object model or DOM. 
and how do we manipulat the dom?  with javascript. 

# Javascript 
Javascript is the language that powers the web.  It came about from the browser wars, originally called livescript, then reverse engineered by Microsoft to jScript.  Before finally being standardised by Europe witn the ECMAScript.  
Thats why you'll sometimes see ES6 as the version on Javascript. 

javascript is an interpreted langauge. java is a compiled one
(interpreted - javascript, python, ruby) (compiled - java, c/c++, swift) (dart- both!)

javascript is weakly typed...

Typesscript - extends javascript language itself to add type checking. Get's compiled into plain javascript

# jQuery
Document Object Model - DOM - change on fly for interactive. (turns html into a tree strcuture by browser)
jQuery - most popular javascript library. john resick. 
jQuery("h1") or even shorter $("h1)

# Bootstrap
Bootstrap - front end library. twitter...very popular.  
Has a number of features like a lot of pre-styled elements (e.g. buttons).  
And it has a lot of classes for a responsive design...responds to viewport. (layout...adaptable layout).  


Front to Back
So javascript is great for manipulating the front end ... what about the back end?
Could build backend in php, rails, java, asp.net, python.


# Javascript on the server - Node
Node frees javascript from the broswer and allows it to run on you desktop or server. 
Beyond into computer...the filesystem, networking system etc. 
EJS (Templating engines) - a way of creating a site made from 

## tooling, npm
Node.js 
npm and yarn

*DEMO EXPRESS*

# REST

How we get information from a server.  What's makes an API Restful? Architectural style that uses http and a common set of commands. REST does not require the client to know anything about the structure of the API.

CRUD
Post, Get, Put & Patch, Delete.


Api's (endpoint, path, parameter)
path /hello/world/
parameters ?type=xml&type=x

GraphQL

Soap, Rest, GraphQL, 
Roy fielding - architectural style for your api structure. 
 

and how are we saving and retrieving all this info?

# Databases

There are a ton of different databse out there.  
MongoDb and Mongoose
but they all fall into two types. 
Databases - SQL vs NoSQL
Structure...SQL tables with very strcutured tables. e.g add extra column (MySQL & Postgres)
Customer orders, banking

NoSQL - Not Only SQL (mongo, redis) 
not the same shape or structure. 
more of a 1 to many.  e.g. posts in a blog, or twitter.

SQL relational VS NoSQL non-relational.

Scalability - nosql scales horizontally (distributed systems). sql vertically


# Security
Authentication (5 levels)
1 - plain text (username & password) - moral hazard and insecure
2 - encrypt the table with a secret - they only need to steal one password
3 - encrypt the password with a hash - we never store the password itself, only the hash.  But it turns out it's very quick to reverse engineer this hashed value.  (note how qwerty has the same hash)
4 - salt and hash passwords - we add a random string to the end of whatever password it is.  then hash the resulting string.  And we can even do that for a number of rounds....and each round makes the resulting hash algorithm slower to compute making a dictionary attack s-l-o-w
5 - oauth 2 - let someone else handle it. 


# ONE MORE THING...OR MORE

# Frameworks
React - Angular - Vue - Ember
they also have natural pairings...(redux, vuex, gatsby)
They allow creating custom html components, e.g. <Card > <Navigation > <Todo Item>

Virtual DOM
What does this mean...a more imperative style like in Unity, when you click you have to go through and manually update all the parts of the UI that you want changed.  With declartive it does this automagically. 

React this is done with properties (props) and hooks.  

It looks at the virtual DOM, works out which nodes in the tree need rebuilt...and only replaces that part.

# Feedback

iconixar flaticon
fontawesome
presentation reveal.js