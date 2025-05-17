/*
  Warnings:

  - You are about to drop the column `courseId` on the `student` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[courseName]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `courseName` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `Student_courseId_fkey`;

-- DropIndex
DROP INDEX `Student_courseId_key` ON `student`;

-- AlterTable
ALTER TABLE `student` DROP COLUMN `courseId`,
    ADD COLUMN `courseName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Course_name_key` ON `Course`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Student_courseName_key` ON `Student`(`courseName`);

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_courseName_fkey` FOREIGN KEY (`courseName`) REFERENCES `Course`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
