CREATE TABLE `budgets`
(
  `id` integer PRIMARY KEY,
  `userId` integer NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL
);

CREATE TABLE `categories`
(
  `id` integer PRIMARY KEY,
  `userId` integer NOT NULL,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `categoryBudgetAmounts`
(
  `budgetId` integer,
  `categoryId` integer,
  `budgetedAmount` decimal NOT NULL
);

CREATE TABLE `users`
(
  `id` integer PRIMARY KEY,
  `email` varchar(255) UNIQUE NOT NULL
);

CREATE TABLE `transactions`
(
  `id` varchar(255) PRIMARY KEY,
  `categoryId` integer NOT NULL,
  `accountId` integer NOT NULL,
  `date` date NOT NULL,
  `amount` decimal NOT NULL,
  `comment` varchar(255)
);

CREATE TABLE `accounts`
(
  `id` integer PRIMARY KEY,
  `userId` integer NOT NULL
);

ALTER TABLE `budgets` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
ALTER TABLE `categories` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
ALTER TABLE `categoryBudgetAmounts` ADD FOREIGN KEY (`budgetId`) REFERENCES `budgets` (`id`);
ALTER TABLE `categoryBudgetAmounts` ADD FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);
ALTER TABLE `transactions` ADD FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);
ALTER TABLE `transactions` ADD FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);
ALTER TABLE `accounts` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
