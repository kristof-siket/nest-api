// @ts-check
import { module } from "@prisma/composer";
import nestService from "./service.mjs";

export default module("nest-api", ({ provision }) => {
  provision(nestService);
});
