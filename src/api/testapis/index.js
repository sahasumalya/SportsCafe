import  handlers from './handlers';

let routes = 
  {
    method: 'GET',
    path: '/hello',
    handler: handlers(20)
  }
;

export default routes;
