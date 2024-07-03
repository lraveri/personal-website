/*
  Warnings:

  - Added the required column `order` to the `OpenSource` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OpenSource" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "isPinned" BOOLEAN NOT NULL DEFAULT false,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_OpenSource" ("createdAt", "description", "href", "id", "imageSrc", "isPinned", "isPublished", "title", "updatedAt") SELECT "createdAt", "description", "href", "id", "imageSrc", "isPinned", "isPublished", "title", "updatedAt" FROM "OpenSource";
DROP TABLE "OpenSource";
ALTER TABLE "new_OpenSource" RENAME TO "OpenSource";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
