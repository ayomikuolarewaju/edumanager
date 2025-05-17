-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_studentId_fkey`;

-- DropIndex
DROP INDEX `Course_studentId_fkey` ON `course`;

-- AlterTable
ALTER TABLE `course` MODIFY `studentId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
