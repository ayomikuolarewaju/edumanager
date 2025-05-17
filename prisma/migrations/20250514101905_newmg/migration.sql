/*
  Warnings:

  - You are about to drop the column `courseName` on the `student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `Student_courseName_fkey`;

-- DropIndex
DROP INDEX `Student_courseName_key` ON `student`;

-- AlterTable
ALTER TABLE `student` DROP COLUMN `courseName`;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
