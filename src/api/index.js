import testRoutes from './testapis'; 
import prodRoutes from './prodapis'; 
import dynamicRoutes from './dynamicDelayapi';
import csvRoutes from './csvapi';
import bankRoutes from './bankapi';

let routes = [];
routes.push(testRoutes);
routes.push(prodRoutes);
routes.push(dynamicRoutes);
routes.push(csvRoutes);
routes.push(bankRoutes);



export default routes;