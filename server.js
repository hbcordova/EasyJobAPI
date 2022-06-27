const jsonServer = require("json-server");
const jsonSeverAuth = require("json-server-auth");
const app = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const port = process.env.PORT || 3000;

app.db = router.db;

app.use(jsonSeverAuth);
app.use(router);
app.listen(port);

