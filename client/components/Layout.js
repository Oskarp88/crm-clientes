import Head from 'next/head';
import React from 'react'
import Sidebar from './Sidebar';

const Layout = ({children}) => {
    return ( 
        <>
          <Head>
            <title>CRM - Administracion de Clientes</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <script src="https://cdn.tailwindcss.com"></script>
          </Head>
          
          <div className='bg-gray-200 min-h-screen'>
            <div className='flex min-h-screen'> 
                <Sidebar />
                {children}
            </div>
           
          </div>
          
          
        </>
     );
}
 
export default Layout;