import * as handlers from './handlers';
var x = "iop";
let routes = 
  {
    method: 'GET',
    path: '/loop',
    handler: handlers.loop
  }
;

export default routes;
