import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import SourceMapSupport from "source-map-support";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";

import Example from "./Example";

SourceMapSupport.install();

const app = express();

app.use(express.static("dist"));

app.get("*", (req, res) => {
  const cache = createCache({ key: "css" });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  const element = (
    <CacheProvider value={cache}>
      <Example />
    </CacheProvider>
  );

  const body = ReactDOMServer.renderToString(element);
  const emotionChunks = extractCriticalToChunks(body);
  const styles = constructStyleTagsFromChunks(emotionChunks);

  const html = `
  <!DOCTYPE html>
  <html>
    <head>
    ${styles}
    </head>
    <body>
      <div id="root">${body}</div>
      <script src="/app.bundle.js"></script>
      <script src="/vendor.bundle.js"></script>
    </body>
  </html>
  `;

  res.send(html);
});

const port = 8000;
app.listen(port, () => {
  console.log(`UI started on port ${port}`);
});
