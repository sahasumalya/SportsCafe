

let postPromise = (connection,values)=>{
    return new Promise((resolve,reject)=>{
        let qstring = "INSERT INTO users(user_id, number_of_deposits, wallet_balance, has_depositted) VALUES("+ "'??'"+","+ "'??'"+","+ "'??'"+","+ "'??'"+")";

        connection.query(qstring,values, function (error, results, fields) {
        if (error)
        {
            console.log(error);
            reject(error);
        }
        else
        {
            resolve(JSON.stringify(results));
        }
      });
       
})
}
let postData = (connection)=>{
    return function(request, h)
{

    let wallet_balance = request.payload.wallet_balance;
    let number_of_deposits = request.payload.number_of_deposits;
    let has_depositted = request.payload.has_depositted;
    let user_id = request.payload.user_id;


    if (!isNaN(user_id) && !isNaN(number_of_deposits) && (has_depositted==1 || has_depositted==0))
    {
       
        let values = [ parseInt(user_id), parseInt(number_of_deposits), parseInt(wallet_balance), parseInt(has_depositted)];
        console.log(values);
        return postPromise(connection, values);
    }
    else
        return "Parameter error";

}
}

module.exports = postData;