let adder = (sum, element) => {
	let p = new Promise ((resolve) => {
    resolve(sum + element);
  });

  return p;
}


export let loop = async (request, h) => {
  let numbers = [1,2,3,4,5,6,7,8,9,10];
  let sum = 0;
  console.log(request.info.remoteAddress);
  for(let i=0; i<numbers.length;i++)
  {
    console.log(`Trying to add ${numbers[i]}`);
    await adder(sum, numbers[i])
  		.then(res => {
        sum = res;
        console.log(`Current sum is ${sum}`);
      });
  }


  return sum;
};

