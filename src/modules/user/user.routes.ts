import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { TReq } from "../../types/http.type";

export const userRoutes = async (fastify: FastifyInstance) => {
  fastify.post(
    "/",
    (
      req: TReq<{
        Body: {
          name: string;
        };
      }>,
      rep: FastifyReply
    ) => {
      const { name } = req.body;
      return rep.send(`hello ${name}`);
    }
  );
};
