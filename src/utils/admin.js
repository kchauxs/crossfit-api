import memberService from "../services/memberService.js";
import { encryptPassword } from "./helpers/handlePassword.js";

export const createAdmin = async () => {
  try {
    const userAdmin = await memberService.getOneMember({
      role: process.env.ADMIN_ROLE,
    });
    if (userAdmin) return;
    const adminPassword = await encryptPassword(process.env.ADMIN_PASSWORD);
    await memberService.createMember({
      name: process.env.ADMIN_NAME,
      gender: process.env.ADMIN_GANDER,
      dateOfBirth: process.env.ADMIN_DATE_OF_BIRTH,
      email: process.env.ADMIN_EMAIL,
      password: adminPassword,
      role: process.env.ADMIN_ROLE,
    });
    console.log("Info: User Admin create: OK");
  } catch (error) {
    console.log("Error: creating user Admin", error);
  }
};
