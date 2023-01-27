-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gamedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `gamedb` ;

-- -----------------------------------------------------
-- Schema gamedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gamedb` DEFAULT CHARACTER SET utf8 ;
USE `gamedb` ;

-- -----------------------------------------------------
-- Table `game`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `game` ;

CREATE TABLE IF NOT EXISTS `game` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT NULL,
  `player_minimum` INT NOT NULL,
  `player_maximum` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `player`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `player` ;

CREATE TABLE IF NOT EXISTS `player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `match`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `match` ;

CREATE TABLE IF NOT EXISTS `match` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `winner_player_id` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS gamer@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'gamer'@'localhost' IDENTIFIED BY 'gamer';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'gamer'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `game`
-- -----------------------------------------------------
START TRANSACTION;
USE `gamedb`;
INSERT INTO `game` (`id`, `name`, `description`, `player_minimum`, `player_maximum`) VALUES (1, 'Settlers of Catan', 'Settle', 3, 6);
INSERT INTO `game` (`id`, `name`, `description`, `player_minimum`, `player_maximum`) VALUES (2, 'Gin', 'Card game', 2, 4);
INSERT INTO `game` (`id`, `name`, `description`, `player_minimum`, `player_maximum`) VALUES (3, 'Demeo', 'Online DND style', 1, 4);
INSERT INTO `game` (`id`, `name`, `description`, `player_minimum`, `player_maximum`) VALUES (4, 'Magic: The Gathering', 'Table top and collectable card game', 2, 4);
INSERT INTO `game` (`id`, `name`, `description`, `player_minimum`, `player_maximum`) VALUES (5, 'Mario Party', 'Switch party game', 1, 4);
INSERT INTO `game` (`id`, `name`, `description`, `player_minimum`, `player_maximum`) VALUES (6, 'UnRailed!', 'Switch game where you keep building train tracks and manage a train to reach a destination', 1, 4);

COMMIT;


-- -----------------------------------------------------
-- Data for table `player`
-- -----------------------------------------------------
START TRANSACTION;
USE `gamedb`;
INSERT INTO `player` (`id`, `name`) VALUES (1, 'Lauren');
INSERT INTO `player` (`id`, `name`) VALUES (2, 'Jack');

COMMIT;


-- -----------------------------------------------------
-- Data for table `match`
-- -----------------------------------------------------
START TRANSACTION;
USE `gamedb`;
INSERT INTO `match` (`id`, `date`, `winner_player_id`) VALUES (1, '2023-01-21', 1);
INSERT INTO `match` (`id`, `date`, `winner_player_id`) VALUES (2, '2023-01-20', 1);

COMMIT;

