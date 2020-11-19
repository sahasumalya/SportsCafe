const csv = require('csv-parser');

let csvtojson = function(request,h)
{
    
    let json_promise = new Promise((resolve,reject)=>{
        let results = [];
        request.payload["file"].pipe(csv('\t'))
        .on('data', (d)=>{
                results.push(d);
        })
        .on('end', ()=>{
            resolve(results);
        })
        .on('error',(er)=>{
            reject(er);
        })
    })

    return json_promise;
    
}

module.exports = csvtojson;