
alter table `20223S_CPS5995_01db`.`Receipe` add   (
 
  
  constraint FOREIGN KEY (`Ingridents_Id`)
  REFERENCES `20223S_CPS5995_01db`.`Rec_Ingridients` (`Ingridents_Id`)
  ON UPDATE CASCADE  ON DELETE CASCADE 

) ;

CREATE TABLE `Rec_Ingridients` (
  `Ingridients_Id` int(10) NOT NULL,
  `Ingridents_Name` varchar(100) NOT NULL,
  `Receipe_Id` int(10) NOT NULL,
  `User_Id` int(10) NOT NULL,
  `CreatedDate` datetime NOT NULL,
  PRIMARY KEY (`Ingridients_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

create  TABLE `Rec_Ingridients`    (
  `Ingridients_Id` int(10) NOT NULL auto_increment ,
  `Ingridents_Name` varchar(100) NOT NULL,
  `Receipe_Id` int(10) NOT NULL,
  `User_Id` int(10) NOT NULL,
  `CreatedDate` datetime NOT NULL,
  PRIMARY KEY (`Ingridients_Id`),
  
  constraint FOREIGN KEY (`Receipe_Id`)
  REFERENCES `20223S_CPS5995_01db`.`Receipe` (`Receipe_Id`)
  ON UPDATE CASCADE  ON DELETE CASCADE ,  
  
  constraint FOREIGN KEY (`User_Id`)
  REFERENCES `20223S_CPS5995_01db`.`User_Info` (`User_Id`)
  ON UPDATE CASCADE  ON DELETE CASCADE 

);

