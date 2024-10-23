import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export const createInviteCode = async () => {
  return await prisma.inviteCode.create({
    data: {
      code: uuidv4(),
    },
  });
};

export const getInviteCodes = async () => {
  return await prisma.inviteCode.findMany();
};
