const express = require('express'); //  there are two methods to import file in js i.e common js and module js
// import express from "express"; == this syntax was module js
// if we want to use this syntax then there is some changes we should do 
// i.e is in json use "type":"module"


const app = express()

// app.get('/', (req, res) => {
//     res.send('Server is Ready')
// });

//get a list of 5 jokes

// json formater is one website use it to know how to json convert into another format

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: " this is a joke"
        },
        {
            id: 2,
            title: 'B joke',
            content: " Parallel lines have so much in common—too bad they'll never meet"

        },
        {
            id: 3,
            title: 'c joke',
            content: " I told my wife she should embrace her mistakes… She gave me a hug."
        },
        {
            id: 4,
            title: 'd joke',
            content: " Why don’t skeletons fight each other? They don’t have the guts."
        },
        {
            id: 5,
            title: 'e joke',
            content: "I’m reading a book on anti-gravity—it’s impossible to put down!"
        }
    ]
    res.send(jokes);
}

);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);

})

