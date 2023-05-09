CREATE TABLE `20223S_CPS5995_01db`.`Rep_Image_Info` (
  `Rep_Image_Info` INT(10) NOT NULL primary key Auto_increment,
  `Oldfilename` VARCHAR(100) NOT NULL,
  `newfilename` VARCHAR(100) NOT NULL,
  `path` VARCHAR(100) NOT NULL,
  `Receipe_Id` INT(10) NOT NULL,
  `User_Id` INT(10) NOT NULL,
  `Lastupdateddate` DATETIME NOT NULL,

    FOREIGN KEY (`Receipe_Id`)     REFERENCES `20223S_CPS5995_01db`.`Receipe` (`Receipe_Id`)     ON DELETE CASCADE     ON UPDATE CASCADE,

    FOREIGN KEY (`User_Id`)     REFERENCES `20223S_CPS5995_01db`.`User_Info` (`User_Id`)     ON DELETE CASCADE     ON UPDATE CASCADE);
    
    
CREATE TABLE `Receipe` (
  `Receipe_Id` int(10) NOT NULL AUTO_INCREMENT,
  `Receipe_Name` varchar(100) NOT NULL,
  `Author` varchar(45) NOT NULL,
  `ReceipeDesc` longtext NOT NULL,
  `Instructions` longtext NOT NULL,
  `Course_Cata` varchar(45) NOT NULL,
  `Cusine` varchar(45) NOT NULL,
  `Preptime` int(11) DEFAULT NULL,
  `Cooktime` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `User_Id` int(11) NOT NULL,
  PRIMARY KEY (`Receipe_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
