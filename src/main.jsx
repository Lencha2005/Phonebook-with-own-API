import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "modern-normalize";

import App from './components/App/App.jsx';
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter future={{ v7_relativeSplatPath: true }}>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <App />
//         </PersistGate>
//       </Provider>
//     </BrowserRouter>
//   </StrictMode>,
// )

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './components/App/App.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/*",
      element: <App />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
);

