// src/index.ts
import express from 'express';
import Shopify, { ApiVersion, AuthQuery } from '@shopify/shopify-api';
require('dotenv').config();

const app = express();

const { PRIV_API_KEY, PRIV_API_SECRET_KEY, SCOPES, PRIV_SHOP_URL, HOST } = process.env;

Shopify.Context.initialize({
  API_KEY,
  API_SECRET_KEY,
  SCOPES: [SCOPES],
  HOST_NAME: HOST,
  IS_EMBEDDED_APP: {boolean},
  API_VERSION: ApiVersion.{version} // all supported versions are available, as well as "unstable" and "unversioned"
});

// the rest of the example code goes here

app.listen(3000, () => {
  console.log('your app is now listening on port 3000');
});
