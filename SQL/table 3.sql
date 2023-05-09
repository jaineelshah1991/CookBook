CREATE TABLE `Rep_Image_Info` (
  `Rep_Image_Info` int(10) NOT NULL AUTO_INCREMENT,
  `Oldfilename` varchar(100) NOT NULL,
  `newfilename` varchar(100) NOT NULL,
  `path`  longtext NOT NULL,
   `videourl`  longtext  NULL,
  `Receipe_Id` int(10) NOT NULL,
  `User_Id` int(10) NOT NULL,
  `Lastupdateddate` datetime NOT NULL,
  PRIMARY KEY (`Rep_Image_Info`),
  KEY `Receipe_Id` (`Receipe_Id`),
  KEY `User_Id` (`User_Id`),
  CONSTRAINT `Rep_Image_Info_ibfk_1` FOREIGN KEY (`Receipe_Id`) REFERENCES `Receipe` (`Receipe_Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Rep_Image_Info_ibfk_2` FOREIGN KEY (`User_Id`) REFERENCES `User_Info` (`User_Id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
