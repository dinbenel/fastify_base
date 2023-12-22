import { FastifyReply, FastifyRequest } from "fastify";
import { RegisterSchema } from "./user.schema";
import { createUser } from "./user.service";

const createUserHandler = async (
  req: FastifyRequest<{ Body: RegisterSchema }>,
  rep: FastifyReply
) => {
  const { email, password, userName } = req.body;
  const res = await createUser({ email, password, userName });
  return res;
};

export { createUserHandler };
