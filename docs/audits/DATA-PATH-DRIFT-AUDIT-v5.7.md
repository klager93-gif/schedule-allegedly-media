# Data Path Drift Audit v5.13.0

## Fixed

Moved pages were still requesting relative JSON paths such as `data/example.json`, `./data/example.json`, and `../data/example.json`.

Those paths can resolve under `/pages/.../data/` after route migration and return an HTML 404 page, creating the browser error:

`Unexpected token '<', "<html>..." is not valid JSON`

v5.13.0 normalizes preview JSON paths to `/data/...` and adds `assets/data-loader.js` for clearer JSON failures.
