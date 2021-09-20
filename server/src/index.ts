// src/index.ts
import http from 'http';
import url from 'url';
import querystring from 'querystring';
import Shopify, { ApiVersion, AuthQuery } from '@shopify/shopify-api';
require('dotenv').config();

const { SHOP_KEY, SHOP_SECRET, SCOPES, SHOP_URL, HOST } = process.env

Shopify.Context.initialize({
  SHOP_KEY,
  SHOP_SECRET,
//   SCOPES: [SCOPES],
  HOST_NAME: HOST,
  IS_EMBEDDED_APP: false,
  API_VERSION: ApiVersion.{version}, // all supported versions are available, as well as "unstable" and "unversioned"
});


async function onRequest(
  request: http.IncomingMessage,
  response: http.ServerResponse,
): Promise<void> {
  const {headers, url: req_url} = request;
  const pathName: string | null = url.parse(req_url).pathname;
  const queryString: string = String(url.parse(req_url).query);
  const query: Record<string, any> = querystring.parse(queryString);

  if (pathName === '/') {
    // check if we're logged in/authorized
    const currentSession = await Shopify.Utils.loadCurrentSession(
      request,
      response,
    );
    if (!currentSession) {
      // not logged in, redirect to login
      response.writeHead(302, {Location: `/login`});
      response.end();
    } else {
      // do something amazing with your application!
    }
    return;
  } // end of if(pathName === '/')
} // end of onRequest()

http.createServer(onRequest).listen(3000);
