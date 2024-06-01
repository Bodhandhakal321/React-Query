import React from 'react';
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Products from './Products.jsx';
import Product from './Product.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/products',
        element: <Products />,
    },
    {
        path: '/products/:productId',
        element: <Product />,
    },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
  </QueryClientProvider>
    // <React.StrictMode>
     
    // </React.StrictMode>
);