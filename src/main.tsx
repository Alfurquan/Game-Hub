import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import theme from './theme.ts'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <RouterProvider router={router} />
    <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
  </ChakraProvider>
  
)
