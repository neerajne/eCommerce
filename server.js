// server.js

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 8000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for case-insensitive search
server.get("/products", (req, res, next) => {
  const nameQuery = req.query.name_like;
  if (nameQuery) {
    const products = router.db.get("products").value();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(nameQuery.toLowerCase())
    );
    res.json(filteredProducts);
  } else {
    next();
  }
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
