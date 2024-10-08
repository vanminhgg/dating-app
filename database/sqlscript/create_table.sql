use datingapp;

CREATE TABLE `user` (
	`id` INT(9) zerofill NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(30) NOT NULL,
	`firstname` VARCHAR(30) NOT NULL,
	`lastname` VARCHAR(30) NOT NULL,
	`email` VARCHAR(100) NOT NULL,
	`password` VARCHAR(50) NOT NULL,
	`phone` VARCHAR(10),
	`dob` VARCHAR(8) NOT NULL,
	`gender` VARCHAR(10) NOT NULL,
	`job` VARCHAR(100),
    `avt` VARCHAR(255),
    `hometown` VARCHAR(100),
    `current_residence` VARCHAR(100),
    `school` VARCHAR(100),
    `height` int(3),
    `bio` VARCHAR(255),
    `looking` VARCHAR(10),
	`create_date` VARCHAR(16),
	PRIMARY KEY (`id`)
);

CREATE TABLE `location` (user
	`user_id` int unique,
	`longitud` VARCHAR(100) NOT NULL,
	`latitude` VARCHAR(100) NOT NULL
);

CREATE TABLE `hobby` (
	`id` int ,
	`hobby_name` VARCHAR(100) NOT NULL
);

CREATE TABLE `user_hobby` (
	`user_id` int ,
	`hobby_id` VARCHAR(100)
);

CREATE TABLE `image` (
	`user_id` int,
	`image_link` varchar(100),
    `order` int
);


CREATE TABLE `match` (
	`sender` int,
	`receiver` int,
    `match_date` varchar(16),
    `match_status` int,
    `deleteflg` int,
	`create_date` varchar(16)
);

CREATE TABLE `block` (
	`blocker` int,
	`blocked_user` int,
	`create_date` varchar(16)
)







