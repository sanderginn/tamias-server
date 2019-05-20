ALTER TABLE `budgets` DROP FOREIGN KEY `budgets_ibfk_1`;
ALTER TABLE `categories` DROP FOREIGN KEY `categories_ibfk_1`;
ALTER TABLE `categoryBudgetAmounts` DROP FOREIGN KEY `categoryBudgetAmounts_ibfk_1`;
ALTER TABLE `categoryBudgetAmounts` DROP FOREIGN KEY `categoryBudgetAmounts_ibfk_2`;
ALTER TABLE `transactions` DROP FOREIGN KEY `transactions_ibfk_1`;
ALTER TABLE `transactions` DROP FOREIGN KEY `transactions_ibfk_2`;
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_ibfk_1`;

DROP TABLE `budgets`;
DROP TABLE `categories`;
DROP TABLE `categoryBudgetAmounts`;
DROP TABLE `users`;
DROP TABLE `transactions`;
DROP TABLE `accounts`;