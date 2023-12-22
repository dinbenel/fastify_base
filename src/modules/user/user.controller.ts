import { FastifyReply, FastifyRequest } from "fastify";
import { LoginSchema, RegisterSchema } from "./user.schema";
import { createUser, login } from "./user.service";

const createUserHandler = async (
  req: FastifyRequest<{ Body: RegisterSchema }>,
  rep: FastifyReply
) => {
  const { email, password, userName } = req.body;
  const res = await createUser({ email, password, userName });
  return res;
};

const loginUserHandler = async (
  req: FastifyRequest<{ Body: LoginSchema }>,
  rep: FastifyReply
) => {
  const { email, password } = req.body;
  const res = await login(email, password);
  if (!res) return rep.code(404).send("credentials are invalid");
  return rep.send(res);
};

export { createUserHandler, loginUserHandler };
