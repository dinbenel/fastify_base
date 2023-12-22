import { FastifyRequest, RouteGenericInterface } from "fastify";

export type TReq<TData extends RouteGenericInterface> = FastifyRequest<TData>;
