import https from 'https';
const JSON = require('circular-json');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test2', (req, res) => {
    res.send('very good')
})

app.get('/test', (req, res) => {

        console.log('call to pwned')
        // const options = {
        //     hostname: `https://haveibeenpwned.com/api/v2/breachedaccount/test@example.com`,
        //     port: 443,
        //     path: '/',
        //     agent: https.globalAgent
        //   };

    const options = {
        host :  `haveibeenpwned.com`,
        port : 443,
        path : '/api/v2/breachedaccount/test@example.com',
        // agent: 'Pwnage-Checker-For-iOS',
        method: 'GET',
        headers: {
            'User-Agent': 'MY IPHINE 7s'
          }       
    }

    // options.agent = new https.Agent(options);

        var getReq = https.request(options, (received) => {

            // console.log(received)

            var data = '';
            // A chunk of data has been recieved.
            received.on('data', (chunk) => {
                data += chunk;
            });

            received.on('end', () => {
                console.log(data)
                res.send(JSON.stringify(data));
                // res.send('good')
                console.log('after pwned')
    

            })   
    })
    getReq.end(); //end the request
    getReq.on('error', (err) => {
        console.log('Error', err)
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))





// var https = require('https');
 
// function getCall() {
//     //initialize options values, the value of the method can be changed to POST to make https post calls
//     var userAccessToken = 'CAAKoIMGu5SAyfOyVhugi7cZAaZA1kHzjrdLvtPlndoKzMJ8xZBtR3YV2iX39FSnhxK1lvtfYXO5FvcbK4MVGJphxeYDZC7HJ5FCmhOr2Ys8ZBG9qYNRSfFGuzoeRgwZBdliKvoW6YPl41b8i3dfrTpR98gFAm6qag9vYM2yD0aEv47fnWQWF1SoXRs6PFFrFu5XOe';
//     var appAccessToken = '24562343562751562|hPEXIpDl0CXt0tNJ';
//     var options = {
//         host :  'graph.facebook.com',
//         port : 443,
//         path : '/debug_token?input_token=' + userAccessToken + '&access_token=' + appAccessToken,
//         method : 'GET'
//     }
 
//     //making the https get call
//     var getReq = https.request(options, function(res) {
//         console.log("\nstatus code: ", res.statusCode);
//         res.on('data', function(data) {
//             console.log( JSON.parse(data) );
//         });
//     });
 
//     //end the request
//     getReq.end();
//     getReq.on('error', function(err){
//         console.log("Error: ", err);
//     }); 
// }
 
// getCall();``