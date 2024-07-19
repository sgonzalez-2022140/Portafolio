import Layout from "./Components/Layout";

import { Inicio } from "./Pages/Inicio";
import { Contacto } from "./Pages/Contacto";

export const routes = [
    {
        path: '/',
        element: <Layout><Inicio /></Layout>
    },
    {
        path: '/contacto',
        element: <Layout><Contacto /></Layout>
    }
];