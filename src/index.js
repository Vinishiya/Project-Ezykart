import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-goe17cd6r60hdlzj.us.auth0.com"
  clientId="zL1MabKV8jluIglRCiXnfN9dkWjnhT4Y"
  authorizationParams={{
    redirect_uri:  "https://vinishiya.github.io"
  }}
>
    <App />
 </Auth0Provider>
);


