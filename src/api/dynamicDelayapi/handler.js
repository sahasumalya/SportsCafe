/*
When the api is called from the same ip concurrently, then the first request will be accepted and other requests that will
be done in the delaying time will get invalid_request response.
When the api is used by thousands of people the node server will be able to handle them simulatneously using its event 
loop and libuv threads.If there are much more requests we can also fork sub-processes to handle them.
*/

let hello = (userMap,timeMap)=>{
    return async (request, h) => {
    let address =  request.info.remoteAddress;
    var num, flag = 1; 
    const threshold = 300000; // 300 secs = 5 mins

    let result = async (flag,num)=>{
        if(flag == 1)
       return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(Math.pow(2,num))
        }, (1+(num-1)*2)*1000);

       })
        else
        return "Invalid Request";
    }

    let reset_counter = (address,val)=>{
    
        if(val==1)
            userMap.set(address, 0);
        else
            userMap.set(address, -1);
        timeMap.set(address, Date.now());
        num = 0;
        

        setTimeout(()=>{
            console.log("Counter reset for "+ address);
            reset_counter(address,0);
        }, threshold)
    }

    if(!userMap.has(address))
    {
        reset_counter(address,1);
       
    }
    else
    {
        num = userMap.get(address);
        num = num+1;
        let ctime = timeMap.get(address);
        let dtime = 1+(num-1)*2;
        let difftime = Date.now()-ctime;
        
        //Checking whether the request is valid depending on delay
        if(difftime>=dtime*1000)
            {
                console.log(difftime + " "+ dtime*1000);
                flag = 1; 
                timeMap.set(address, Date.now());
                userMap.set(address, num);
            }
        else
        {
            flag = 0;
        }
        
        
    }
    console.log("state:"+num);
    return result(flag,num);
    
  };
}
  
  module.exports = hello;
  
