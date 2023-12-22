import { UserInsert, userTable } from "../../db/user.schema";
import { dbClient } from "../../lib/db.client";

const createUser = async (user: UserInsert) => {
  try {
    const res = await dbClient.insert(userTable).values(user).returning();
    console.log(res);
  } catch (error) {}
};

const getUserByEmail = async () => {
  try {
    const res = await dbClient.select().from(userTable);
  } catch (error) {}
};

export { createUser, getUserByEmail };
