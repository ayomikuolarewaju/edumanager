/*
  Warnings:

  - You are about to drop the column `studentId` on the `course` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_studentId_fkey`;

-- DropIndex
DROP INDEX `Course_studentId_fkey` ON `course`;

-- AlterTable
ALTER TABLE `course` DROP COLUMN `studentId`;
