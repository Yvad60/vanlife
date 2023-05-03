import { createServer } from "miragejs";
import vans from "./data/vans";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/vans", () => ({
      vans: vans,
    }));
  },
});
