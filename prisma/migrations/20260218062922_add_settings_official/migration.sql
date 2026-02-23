/*
  Warnings:

  - You are about to drop the `MediaItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Setting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MediaItem";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Setting";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Settings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "durationMs" INTEGER NOT NULL DEFAULT 10000,
    "ticker" TEXT NOT NULL DEFAULT '',
    "hijriAdjustDays" INTEGER NOT NULL DEFAULT 0,
    "gregAdjustDays" INTEGER NOT NULL DEFAULT 0,
    "lic_men" INTEGER NOT NULL DEFAULT 0,
    "lic_women" INTEGER NOT NULL DEFAULT 0,
    "lic_heavy" INTEGER NOT NULL DEFAULT 0,
    "lic_motor" INTEGER NOT NULL DEFAULT 0,
    "lic_control" INTEGER NOT NULL DEFAULT 0,
    "lic_slope" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AwarenessProgram" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hall" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "fromDate" DATETIME,
    "toDate" DATETIME,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_AwarenessProgram" ("count", "fromDate", "hall", "id", "notes", "title", "toDate") SELECT coalesce("count", 0) AS "count", "fromDate", "hall", "id", "notes", "title", "toDate" FROM "AwarenessProgram";
DROP TABLE "AwarenessProgram";
ALTER TABLE "new_AwarenessProgram" RENAME TO "AwarenessProgram";
CREATE TABLE "new_TrainingProgram" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hall" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "fromDate" DATETIME NOT NULL,
    "toDate" DATETIME NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_TrainingProgram" ("fromDate", "hall", "id", "notes", "title", "toDate") SELECT "fromDate", "hall", "id", "notes", "title", "toDate" FROM "TrainingProgram";
DROP TABLE "TrainingProgram";
ALTER TABLE "new_TrainingProgram" RENAME TO "TrainingProgram";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
