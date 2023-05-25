import { createServer, Model, Response } from "miragejs";
import users from "./data/user";
import vans from "./data/vans";

createServer({
  models: {
    vans: Model,
    user: Model,
  },

  seeds(server) {
    vans.forEach((van) => server.create("van", van));
    users.forEach((user) => server.create("user", user));
  },

  routes() {
    this.namespace = "api";
    this.timing = 1000;
    this.passthrough("https://firestore.googleapis.com/**");

    this.get("/vans", (schema) => schema.vans.all());

    this.get("/vans/:id", (schema, request) => {
      const { id } = request.params;
      return schema.vans.find(id);
    });

    this.get("/host/vans", (schema) => schema.vans.where({ hostId: "123" }));

    this.get("/host/vans/:id", (schema, request) => {
      const { id } = request.params;
      return schema.vans.where({ id, hostId: "123" });
    });

    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);
      const foundUser = schema.users.findBy({ email, password });
      if (!foundUser) {
        return new Response(401, {}, { message: "No user with those credentials found!" });
      }
      foundUser.password = "undefined";
      return {
        user: foundUser,
        token: "Enjoy your pizza, here's your tokens.",
      };
    });
  },
});
