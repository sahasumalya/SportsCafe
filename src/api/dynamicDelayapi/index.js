import  handlers from './handler';
var userMap = new Map();
var timeMap = new Map();
let routes = 
  {
    method: 'GET',
    path: '/dynamicdelay',
    handler: handlers(userMap, timeMap)
  }
;

export default routes;