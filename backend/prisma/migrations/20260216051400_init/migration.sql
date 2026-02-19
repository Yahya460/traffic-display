-- CreateTable
CREATE TABLE "TrainingProgram" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hall" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "fromDate" DATETIME NOT NULL,
    "toDate" DATETIME NOT NULL,
    "notes" TEXT
);

-- CreateTable
CREATE TABLE "AwarenessProgram" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hall" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "count" INTEGER,
    "fromDate" DATETIME,
    "toDate" DATETIME,
    "notes" TEXT
);

-- CreateTable
CREATE TABLE "Setting" (
    "key" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MediaItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "filename" TEXT NOT NULL,
    "durationS" INTEGER NOT NULL DEFAULT 7
);
