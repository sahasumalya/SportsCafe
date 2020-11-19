let hello = (x)=>{
  return (request, h) => {
  return 'Hello, world'+x;
};
}
module.exports = hello;
