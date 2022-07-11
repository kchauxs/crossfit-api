import memberService from "../services/memberService.js";
import { encryptPassword } from "./helpers/handlePassword.js";

export const createAdmin = async () => {
  try {
    const userAdmin = await memberService.getOneMember({
      role: "admin",
    });
    if (userAdmin) return;
    const adminPassword = await encryptPassword(process.env.ADMIN_PASSWORD);
    await memberService.createMember({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: adminPassword,
      role: "admin",
    });
    console.log("Info: User Admin create: OK");
  } catch (error) {
    console.log("Error: creating user Admin", error);
  }
};
