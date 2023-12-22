import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { TReq } from "../../types/http.type";
import { createUserHandler, loginUserHandler } from "./user.controller";
import { loginSchemaJSON, registerSchemaJSON } from "./user.schema";

export const userRoutes = async (fastify: FastifyInstance) => {
  fastify.post(
    "/register",
    {
      schema: registerSchemaJSON,
    },
    createUserHandler
  );

  fastify.post(
    "/login",
    {
      schema: loginSchemaJSON,
    },
    loginUserHandler
  );
};
