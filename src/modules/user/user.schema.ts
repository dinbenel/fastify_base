import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().length(6),
  userName: z.string(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().length(6),
});

export const registerSchemaJSON = {
  body: zodToJsonSchema(registerSchema, "registerSchema"),
};
export const loginSchemaJSON = {
  body: zodToJsonSchema(loginSchema, "loginSchema"),
};

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
