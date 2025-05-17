-- AlterTable
ALTER TABLE `course` ADD COLUMN `studentId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
