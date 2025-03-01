set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Get-ExecutionPolicy
Get-ExecutionPolicy -list

# Node EP-03:
    node REPL
    R = Read
    E = Evaluate
    P = Print
    L = Loop

    command 'node' get into the node REPL Mode

    Node Js is Javascript Runtime Environment

    Whenever we write any piece of js code, Node js passed that code to v8 Engine, and v8 Engine executes that code.

    this is similer to Writing code in console. The differance is instead of node there is browser passing the code.

    Inside node the global object is 'global'. It is not a part of v8 engine, it is one of the super 
    power that give to us by node Js. Normally v8 does not understands global, it understands it only if it is passed by NodeJs.

    In browser if we write window/this/self/frames it gives us the global object, but in NodeJs 'console.log(this)' gives us an 
    empty object.

    to remove this discriminancy over global, The Open Js Foundation come up with a word 'globalThis', 
    which refers to golbal object to all browsers,node and every where.

# Node EP-04:
    require(PATH) // One Module into Another

    whenever we require a module into another,it runs the code but we can not access the variable or function form the another 
    module.
    Modules protects their variable and functions from leaking by default
    To give Access we need to export it from the module and then import it in the other.


    CommonJs Module (cjs)             |   ES Module (mjs)
    -------------------------------------------------------------------
    1) Use module.exports, require    | 1) Use import, export
    2) By default Enebaled in NodeJs  | 2) By default in React, Angular              |
    3) "type": "CommonJs"             | 3) "type": "module" 
    4) Older Way                      | 4) Newer Way
    5) Synchronous Call ()            | 5) Async Way
    6) Code runs in non-strict mode   | 6) The code runs in strict mode
    e.g- variable works even if       |    e.g- variable will not works if not
    not declared as var/let/const     |    declared as var/let/const
    
    module.exports => empty object

    if we want to make a folder as module, we create an index.js inside the folder and import all 
    other module of the folder into the index file. and in app.js we have to import the modules directly from the folder.

# Node EP-05:
    in java script if we write a function we can not access wahtever variable/function declared inside it, from outside directly. 
    Modules are worked as same as well. whenever we created a module, and whenever we require("/PATH") it from the module , 
    NodeJs warp it inside a function name as function(IIFE) -> 'Immedeatly Invoked Function Expression' and execute it. 
    So whatever inside the module can not be access directly unless it is exported.

    'Immedeatly Invoked Function Expression' => 
        (function () {

            // all code of module runs here

        })(); <-- Immedeatly Invoked function Expression

    Why IIFE ?
        1) Immedeatly Invoked the code.
        2) Privacy : It keeps the Variable and Function Safe

    Q. How are variables and frunctions are private in different module ??
    Ans:  IIFE and require statement

    Q. How do you get access to require, module.exports ?
    Ans: These are given by Node as a parameter to the IIFE in which the function is warpped .
    (function (module, require) {

            // all code of module runs here

        })();


    # require("/PATH") : 5 Step Mechanism

        Step 1: Resolving the Modules
                -> check ./localpath or .json path or node:module

        Step 2: Loading the Modules
                -> file content is loadded according to the file type

        Step 3: Compile
                -> Wrapps inside an IIFE

        Step 4: Code Evaluation
                -> The code executed and module.exports happen

        Stpe 5: Cahcheing
                -> The module in cached: 
                    The module can be required by multiple other module.The code of the required module run only once 
                    and chached the value. Whenever other file require it, it does not go through all of the 5 Steps again, 
                    it simply return it from Cache.

        Whenever we write a module, it is not directly pass to v8, at first NodeJs warpped it inside an IIFE and 
        then passed it to v8, and then v8 execute it.

# Node EP-06:
    Node.js has an 'event-driven architecture' capable of 'asynchronous I/O'.

    JS --> Synchronous Single Threaded Language

    Synchronous => Blocking
    ASynchronous => Non-Blocking

    JavaScript is Synchronous but with Node it become ASynchronous

    Synchronous work in JS Engine -> Does not takes time, done immedeatly
    ASynchronous work in JS Engine -> Takes Time

    v8 Engine in not capable of doing things like which are based on OS. like reading file, connecting to DB, 
    make an API call, timer etc. For that NodeJs provide some Super Power called 'libuv', whenever v8 needs such 
    operation it offloads it to libuv and libuv get the response from the OS and return it to v8.

    v8 i realy good at Synchronous work, but whenever any ASynchronous work comes, it passes it to libuv.

    libuv => It is a C library by which ASynchronous I/O made simple.

    v8 -> C++
    libuv -> C

    NodeJs is a Non-Blocking I/O with v8

# Node EP-07:
    # Code Demo
        -> Sync code
        -> Async code
        -> Blocking Sync Code
        -> setTimeout (cbfn, 0)
        -> Non-Blocking I/O
        -> main Thread
        -> Asynchronous I/O
        -> libuv Github

# Node EP-08:
    V8 Engine Architechture:

    JavaScript is a Just In Time Compiled Language.

    JavaScript Code Process Inside v8 Engine
    Any piece of js Code
        --> 1) Parsing
                --> a) Lexical Analysis(Tokenization): The code is broken down to tokens, this is known as lexical token.

                --> b) Syntax Analysis: An Abstract Syntax Tree (AST) is Developed out of the tokens. This step is kkown as parsing. (https://astexplorer.net/)
        
        --> 2) Interpretter & JIT Compilation
                v8 Engine Interpretter is Known as Ignition Interpretter.
                AST is passed to this Interpretter.

                Ignition Interpretter started to converting it to ByteCode.
                Now when Ignition Interpretter finds out some code or variables that are used repeatedly, and has a chance of 
                optimization it gives it to the compiler called Turbofan Compilar for optimization. This piece of code is called 
                as Hot Code. 
                Turbofan Compilar, compiled it to Optimized Machine Code.
                But while Optimization, the Turbofan Compilar compiler make some assumptions and type cast it,
                    e.g supprose a sum(2,3) function ,when is given to Turbofan it makes assumption that it wiil be numbers, so 
                    next time when given sum(5,6), it will be compled quickly, but if next time it is given sum('a','b'), it breaks 
                    the assumption on Turbofan so it can not compile and De-Optimize it and give it back to Ignition Interpretter. 
                    Then Ignition Interpretter again Interpretted is as regular way and convert it to ByteCode.

                Finally the ByteCode by Ignition Interpretter and Optimized Machine Code by Turbofan Compilar is Executed.


              AST --|
                    |
                    V              Hot Code
            Ignition Interpretter -----------------> Turbofan Compiler 
                    |    ^       (optimization)           |
                    |    |                                |
                    |    |_______________________________ |
                    |           (de-optimization)         |
                    V                                     V
                Byte Code                        Optimized Machine Code
                    |                                     |
                    |___________>  Execution <____________|

            GARBAGE COLLECTION -> (Mark & Sweep Algorithm)
                    Orinoco
                    Oilpan
                    Scavenger
                    Mark-Compact                       


    Interpretted Language    |   Complied Language
    -------------------------|-------------------------------------------------
    1) line by line          | 1) First Compilation( High Level to Machine Code)
    2) Fast initial executed | 2) Initially heavy but later fast execution
    3) Use Interpretter      | 3) Use Compiler

    JavaScript is both Interpretted and Compiled. It uses JIT Compilation(Just In Time Compilation).


    Resource:
        https://astexplorer.net/
        https://github.com/v8/v8/tree/main
        https://v8.dev/

# Node EP-09:
    Inside libuv

    Asunchronout I/O and non-Blocking I/O is only done in libuv

    libuv
        --> Event Loop:  (Timer --> Poll --> Check --> Close)
            Event Loop Phase
                Timer:
                    1st Timer.All the callbacks that are set by setTimeout or setInterview or any timer callbacks, 
                    are executed. It is first prioratise the timer callbacks.
                Poll:
                    After Timer Poll.In the poll phase all the callbacks that are associated with I/O are executed. 
                    API Calles, data, fs,crypto, http.get, incoming connections. Moset of the callbacks are executed here.
                Check:
                    After Poll Check.In this check phase, all the callbacks that are set by setImmediate will be executed.
                Close:
                    After Check Close.In this phase all the close operation happen. suppose a socket is open it will close here.

                Before ecah Phase Event Loop run one internal loop cycle. of two phase. 
                    process.nextTick()
                    promise callbacks

                before executing ecah phase Event Loop execute this small cycle. It is the priority que. All the phases small and main 
                have their separate Queues.

                            Priority Que
                            
                         --> process.nextTick() --     
                        |                         |
                        |                         |
                        |                         |
                        --- promise callbacks <---   


                                Event Loop

                            ---- Timer --->
                            ^              |
                            |              |
                            |              V
                            Close           Poll
                            ^              |
                            |              |
                            |              |
                            --- Check <---


                Execution Steps
                    process.nextTick()
                    promise callbacks
                    Timer
                    process.nextTick()
                    promise callbacks
                    Poll
                    process.nextTick()
                    promise callbacks
                    Check
                    process.nextTick()
                    promise callbacks
                    Close
                This cycle wil runs again and again in a loop.

                If Event Loop is Idle, i.e all the pahse is empty then Event Loop is waits at the Poll phase. Whenever it has 
                something it started to loop again. After Idle the Event Loop starts again from Poll Phase.
                Poll --> Check --> Close --> Timer
                If all the Callbcak Queues are empty and there is a Timer going on for suppose 5 seconds, event loop calculates 
                how much time did it have to wait in poll phase, and waits that much time in poll phase, and start running again after 
                5 seconds.

                Event Loop of browser is different from Event Loop of node. The Event Loop of browser always keep running.
                One Cycle of Event Loop is called a Tick.
                Additional Phase of Event Loop
                    - Pending callbacks => executes I/O callbacks deferred to the next loop iteration
                    - idle, prepare => only used internally

                    According to the Documentation the Cycle is :

                    ---> timer --> pending callbacks --> idle, prepare --> poll --> check --> close --|
                    |                                                                                 |
                    |_______________<________________________________________<________________________|
                    

    Resource:
        https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
        https://docs.libuv.org/en/v1.x/design.html
        https://github.com/libuv/libuv/blob/v1.x/src/unix/core.c

    --> Callbcak Queues:
    --> Thread Pool:


# Node EP-10:
    Thread Pool
        Threads are like containers. Inside it some piece of JS code runs. Whenever some Async operation come to libuv it 
        assign it to a thread and block it so that the main thred can keep open. Node has by default 4 thread. 
        it is known as UV_THREADPOOL_SIZE = 4.
        If a 5th operation has come , it has to wait until one thread is finish its work and become empty.
        Thread Pool size can be alter by useing process.env.UV_THREADPOOL_SIZE = SIZE
    
        Thread Pool
            - fs - dns.lookup - crypto    
            - user specified input

        For API Call libuv does not uses the Thread Pool. An API call is a network connection/TCP connection request. 
        For that libuv uses Socktes. If multiple requests are coming then there will be multiple sockets, 
        each socket have Socket Descripter/File Descripter (FDS).

        If there is a connection/API Call and we want to write some data on it. So that socket connection become block, 
        that means we can not do aany other operation on that connection untill the process is complete. This create a Thread.

        So if there are thousands API calls , in this way there will be thousands thrads.

        This is known as Thread Per Connection Model. --> Not a Good Model.

        But NodeJs does not work like that. NodeJs handled this senario by using a system inside our operating system Call 
        epoll (linux)/ kqueue (MacOs)

        epoll => epoll is a Linux kernel system call for a Scalable I/O Event Notification Mechanism.( Uses red-black tree data structure )

        Whenever there is a network call, there will be a socket and Socket Descripter. 
        Now there is a epoll Descripter which contains multiple such Socket Descripter and manages. Whenever there is any 
        read/write acivity in any of the connection the epoll notifies it to libuv, and libuv then process in poll phase and 
        send a call back to Event Loop and then the Event Loop process it and give it to v8 Engine and code will be executed.



        Node Js is both Single Thread and Multi Thred, depending upon what type of code it is given to operate.        


        Learnings of this Episode:

        ----> " DON'T BLOCK THE MAIN THREAD "
            -- Don't Use sync methods in MAIN THREAD
            -- don't do Heavy JSON objects operation in MAIN THREAD
            -- don't do complex Regex operation in MAIN THREAD
            -- don't do Complex Calculations/Loops in MAIN THREAD

        ----> Data Structure is Important
            -- epoll -> Red-Black Tree
            -- For timer Queue inside libuv --> Min-Heap

        ----> Naming is Important 
            -- process.nextTick() -> done immediately
            -- setImmediate       -> done in next event loop cycle/next tick

        -----> There is a lot to learn


# Node EP-11:
    Server:
        It can be both Hardware and Software.
        In a Machine/Hardware we have operating system, whiich many file, data, memory. To access this memory from outside 
        world we need a way to connect, to make a connection we need an application.
        So suppose users are making multiple requests to access those files, data. To handle those requests we need an application, 
        which will listen to all these requests and will send the data accordingly.
        Sometime we reffer to this application as Server and Sometime we reffer to this hardware as Server.

        Creating a server using Node:
            Creating an application using Node which can handle the user requests. This time the application is reffer as server.

        Client Server Architechture:
            Clint -> Someone who is trying to access the server.
            A client have a machine with OS and IP Address and a server also have a machine with OS and IP Address.
            So when a client wants to access the files, data of the server, it makes a socket connection and creates a request, 
            so there should be some one on the server to listen those requests. That application over the server listion to the request.

            Client --> socket connection --> request create --> server listion --> server fetches the data --> give it to client --> socket connection closed

            socket connection uses TCP/TP protocall

            protocall -> set of rule by which two computer can connect to each other by using their IP address.

            There are different rules/laguage for two computers to talk to each other.
                HTTP, FTP, SMTP
                HTTP -> Hyper Text Transfer Protocall
                FTP -> File Transfer Protocall
                SMTP -> Simple Mail Transfer Protocall

            TCP/IP Protocall -> The Protocall of sending the data over an IP.

            Web Server is basically a HTTP server.

            Whenever we sending data from server to client, we se send it in Chunks/Packets.The data comes in Stream & Buffer According to TCP/IP Protocall.

            DNS -> Domain Name Server:
                It mapes over the Domain Name and the IP.

            We can create different Servers/Application on a Server/Computer. We can Identify different Server/Application by their PORT. 
            Each Server/Application is assigned to a specific PORT.
            IP:PORT


            IP + PORT + PATH ==> API

            Socket:                          | Web-Socket:
            ---------------------------------|---------------------------------
            1) Close the socket connection   | 1) Keeps the socket connection
            after the data fetched           |    open for longer time and make a 
                                             |    two-way connection with user.
            2) Keep the socket open for next | 2) Block the socket connection.
            request.                         |


# Node EP-12:
    Database:
        What is a database ?
            In computing, a database is an organized collection of data or a type of data store based on the use of a 
            database management system (DBMS), the software that interacts with end users, applications, and the database 
            itself to capture and analyze the data. The DBMS additionally encompasses the core facilities provided to administer 
            the database. The sum total of the database, the DBMS and the associated applications can be referred to as a database 
            system. Often the term "database" is also used loosely to refer to any of the DBMS, the database system or an application 
            associated with the database.

        Type of Database:
            1) Relational DB
                - MySQL, PostgresSQL
            2) No-SQL DB
                - MongoDB
            3) In Memory DB
                - Redis
            4) Distributed SQL DB
                - Cockroach DB
            5) Time Series DB
                - Influx DB
            6) OO DB
                - db4o
            7) Graph DB:
                - Neo4j
            8) Hierarchial DB:
                - IBM IMS
            9) Newtwork DB 
                - IDMS
            10) Cloud DB
                - Amazon RDS

            RDMS (MySQL, PostgreSQL)
            EF Codd -> Codd's 12 Rules [0-12] (Total 13 Rule)
            If a Database follows these Rules it bocome a Relational Database.
            But mordern Database dosn't follw these Rules.

            Michal Videnius --> MySQL
            3 Daughter
            My -> MySQL
            Max -> Max DB
            Maria -> Maria DB (Fork/Clone of mySQL)

            mySQL -> Sun Micro System. --> Oracle.


            Michael Stonebreaker

            Project Ingres(University of California)
                |
                |
                V 
            Post Ingress --> PostgresSQL 


            SQL => Structured Query Language


            NoSQL 
                Types:
                    1) Document DB -> MongoDB
                    2) Key Value DB
                    3) Graph DB
                    4) Wide Column DB
                    5) Multi-Model DB

        10gen company created MongoDB. It name mongo came from Humongous. Later the company changes their name to MongoDB Inc.

        MongoDB
            Table ------> Collection
            Row   ------> Document
            Column -----> Fields

            No need for joins.
            No need for Data Normalization.

        RDBMS (mySQL)                               |  NoSQL(MongoDB)
        --------------------------------------------|---------------------------------------------
        1) Table, Rows, Columns                     | 1) Collection, Document, Fields
        2) Structured Data                          | 2) Unstructured Data
        3) Fixed Schema                             | 3) Flexible Schema
        4) SQL                                      | 4) Mongo (MQL), Neo4j (Cypher)
        5) Tough Horizantal scaling                 | 5) Easy to scale horizantaly + vertically
        6) Relationships - foriegn key & joins      | 6) Nested ( Relationships)
        7) Read - heavy apps, transction workloads  | 7) Real Time, Big Data, Distributed computing
        8) Eg. Banking Apps                         | 8) Eg. Real Time analysis, social media

    Uber Schemaless Database.
        

# Node EP-13:
    MongoDB
        - Cloud Version (Atlas)
            -- Community Edition ( Free )
            -- Enterprise Edition ( Paid )
        - Downloadable Version

    Cloud Version:
        MongoDB Website --> 
            Try Atlas Free
            SignUp with google
            complete Survey Form
            Deploy Your cluster
            -- Click Choose Free
            -- Name cluster
            -- Choose Provider, Region
            -- Click Create Deployment
            -- Username / Password given by MongoDB
                -- Username: sadcat14
                -- Password: KHkOwhsZfJi0z9Wv
            -- Click Create Database User
            -- Click Choose a connection method **
            Get the connection String
            option 1
                -- Click on Connect
                -- Click on Drivers
                -- get the Connection String
            option 2
                -- Click on Compass
                -- get the Connection String
                -- install Compass
                -- Click on New Connection
                -- Fill the Connection String
                -- If Below Issue Occured
                    "4850816:error:10000438:SSL routines:OPENSSL_internal:TLSV1_ALERT_INTERNAL_ERROR:..\..\third_party\boringssl\src\ssl\tls_record.cc:592:SSL alert number 80"

                    -- Allow Network Access
                        Ensure the IP address or network you're connecting from is whitelisted in Atlas:
                        -- Go to your MongoDB Atlas project.
                        -- Navigate to Network Access.
                        -- Add your IP address or allow access from anywhere (0.0.0.0/0) temporarily for testing.

    Refrrance: https://mongodb.github.io/node-mongodb-native/6.12/
