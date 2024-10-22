-- CreateTable
CREATE TABLE "Handle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bskyHandle" TEXT NOT NULL,
    "bskyDid" TEXT NOT NULL,
    "requestedHandle" TEXT NOT NULL,
    "inviteCodeId" INTEGER NOT NULL,
    CONSTRAINT "Handle_inviteCodeId_fkey" FOREIGN KEY ("inviteCodeId") REFERENCES "InviteCode" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InviteCode" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Handle_bskyHandle_key" ON "Handle"("bskyHandle");

-- CreateIndex
CREATE UNIQUE INDEX "Handle_bskyDid_key" ON "Handle"("bskyDid");

-- CreateIndex
CREATE UNIQUE INDEX "Handle_requestedHandle_key" ON "Handle"("requestedHandle");

-- CreateIndex
CREATE UNIQUE INDEX "InviteCode_code_key" ON "InviteCode"("code");
