import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getHandle = async ({ handle }) => {
  return await prisma.handle.findFirst({
    where: {
      requestedHandle: handle,
    },
  });
};

export const createHandle = async ({
  bskyHandle,
  bskyDid,
  requestedHandle,
  inviteCode,
}: {
  bskyHandle: string;
  bskyDid: string;
  requestedHandle: string;
  inviteCode: string;
}) => {
  const firstInviteCode = await prisma.inviteCode.findFirst({
    where: {
      code: inviteCode,
      used: false,
    },
  });

  if (!firstInviteCode) {
    throw new Error("Invalid invite code", { cause: "inviteCode" });
  }

  const data = await prisma.handle.create({
    data: {
      bskyHandle,
      bskyDid,
      requestedHandle,
      inviteCodeId: firstInviteCode.id,
    },
  });
  if (data) {
    await prisma.inviteCode.update({
      where: {
        code: inviteCode,
      },
      data: {
        used: true,
      },
    });
  }
};

export const getHandles = async () => {
  return await prisma.handle.findMany();
};

export const deleteHandle = async (id: number) => {
  return await prisma.handle.delete({ where: { id } });
};
