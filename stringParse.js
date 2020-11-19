var exp = "wallet_balance=40ANDnumber_of_deposits>3ANDdepositted_users<7";

function stringParse(qs)
{
    let result={};
    result.keys = "";
    result.values=[];
    let a = qs.split("AND");
    let validkeys = ["wallet_balance", "number_of_deposits", "has_depositted"];

    for(let i=0;i<a.length;i++)
    {

        if(i!=0)
            result.keys+=" AND ";
        if(i==0)
            result.keys+="(";
        let b = a[i].split("OR");
        console.log(b);
        
        
        for(let j=0;j<b.length;j++)
        {
            if(j!=0)
                result.keys+=" OR ";
            if(j==0)
                result.keys+="(";


            let c,operator;
            if(b[j].indexOf("=")!=-1)
            {
                c=b[j].split("=");
                operator = "=";
            }
            else if(b[j].indexOf(">")!=-1)
            {
                c=b[j].split(">");
                operator = ">";
            }
            else if(b[j].indexOf("<")!=-1)
            {
                c=b[j].split("<");
                operator = "<";
            }
            
            
            if(c==undefined)
            {
                result.error = "Query is not structured";
                return result;
            }

            if(validkeys.indexOf(c[0])!=-1 && !isNaN(c[1]))
            {
                result.keys+= c[0]+operator+"??";
                result.values.push(c[1]);
            }

            if(j==b.length-1)
            result.keys+=")";
            
        }
        if(i==a.length-1)
            result.keys+=")";
    }

    return result;
}

console.log(stringParse(exp));