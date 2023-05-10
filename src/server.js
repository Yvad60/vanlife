import { createServer, Model } from "miragejs";
import vans from "./data/vans";

createServer({
  models: {
    vans: Model,
  },

  seeds(server) {
    vans.forEach((van) => server.create("van", van));
  },

  routes() {
    this.namespace = "api";

    this.get("/vans", (schema) => schema.vans.all());

    this.get("/vans/:id", (schema, request) => {
      const { id } = request.params;
      return schema.vans.find(id);
    });
  },
});
