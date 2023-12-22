import { UserInsert, userTable } from "../../db/user.schema";
import { dbClient } from "../../lib/db.client";
import { eq } from "drizzle-orm";
import argon2 from "argon2";
import { sign } from "jsonwebtoken";
import { config } from "../../config";

const createUser = async (user: UserInsert) => {
  try {
    const hashed = await argon2.hash(user.password);
    const res = await dbClient
      .insert(userTable)
      .values({
        ...user,
        password: hashed,
      })
      .returning({
        id: userTable.id,
        userName: userTable.userName,
        email: userTable.email,
      });

    return res[0];
  } catch (err) {
    console.log(err);
  }
};

const getUserByEmail = async (email: string) => {
  try {
    const res = await dbClient
      .select()
      .from(userTable)
      .where(eq(userTable.email, email));
    return res[0];
  } catch (err) {
    console.log(err);
  }
};

const login = async (email: string, password: string) => {
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return;
    }
    if (!(await argon2.verify(user.password, password))) {
      return;
    }
    const accessToken = sign(
      {
        id: user.id,
        email: user.email,
      },
      config.accessSecret
    );
    const { password: dbHashed, ...data } = user;

    return {
      user: data,
      accessToken,
    };
  } catch (err) {
    console.log(err);
  }
};

export { createUser, getUserByEmail, login };
