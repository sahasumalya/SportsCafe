import  handlers from './handler';
let routes = 
  {
    method: 'POST',
    path: '/csv2json',
    config : {
        payload: {
        output: "stream",
        parse: true,
        allow: "multipart/form-data",
        maxBytes: 10000 * 1000 * 1000
      }
  },
    handler: handlers
  }
;

export default routes;