import {Home, About, Users, Error} from './templates/init'

const routesConfig = [
    {
        path: "/",
        component: Home,
        exact : true
    },
    {
        path: "/about",
        component: About,
        exact : true
    },
    {
        path: "/users",
        component: Users,
        exact : true
    },
    {
        path: "*",
        component: Error,
        exact : true
    }
];



export default routesConfig ;
