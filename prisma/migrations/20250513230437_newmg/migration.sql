/*
  Warnings:

  - A unique constraint covering the columns `[courseId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Made the column `courseId` on table `student` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_studentId_fkey`;

-- DropIndex
DROP INDEX `Course_studentId_fkey` ON `course`;

-- AlterTable
ALTER TABLE `student` MODIFY `courseId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Student_courseId_key` ON `Student`(`courseId`);

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
