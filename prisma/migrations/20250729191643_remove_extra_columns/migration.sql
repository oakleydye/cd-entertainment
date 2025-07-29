/*
  Warnings:

  - You are about to drop the column `accessibility_needs` on the `client_intake_forms` table. All the data in the column will be lost.
  - You are about to drop the column `dietary_restrictions` on the `client_intake_forms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "client_intake_forms" DROP COLUMN "accessibility_needs",
DROP COLUMN "dietary_restrictions";
