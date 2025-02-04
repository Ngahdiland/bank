"use server";

import { createSessionClient } from "../appwrite";
import { createAdminClient } from "../appwrite";
import { ID } from "node-appwrite";
import { cookies } from "@/node_modules/next/headers";
import { parseStringify } from "../utils";
export const signIn = async ({email, password}:signInProps) => {
  try {
    const { account } = await createAdminClient();
    const responce = await account.createEmailPasswordSession(email, password);
    return parseStringify(responce);
  } catch (error) {
    console.log("====================================");
    console.log("Error", error);
    console.log("====================================");
  }
};
export const signUp = async (userData: SignUpParams) => {
    const {email, password, firstName, lastName} = userData;
  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),   
      email,
      password,
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount)
  } catch (error) {
    console.log("====================================");
    console.log("Error", error);
    console.log("====================================");
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user =  await account.get();
    return parseStringify(user)
  } catch (error) {
    return null;
  }
}

export const logoutAccount = async () => {
  try {
    const {account} = await createSessionClient();
    cookies().delete('appwrite-session');
    await account.deleteSession('current')
  } catch (error) {
    return null
  }
  
}
