
use 20223S_CPS5995_01db;
CREATE TABLE User_Info (
  `User_Id` int(10) NOT NULL auto_increment,
  `FirstName` varchar(45) NOT NULL,
  `LastName` varchar(45) NOT NULL,
  `City` varchar(45) NOT NULL,
  `ZipCode` varchar(45) NOT NULL,
  `Mobile` int(10) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `SecurityQuestion` varchar(45) NOT NULL,
  `Answer` varchar(45) NOT NULL,
  `User_Type` varchar(45) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  `Profile_Image` varchar(45) DEFAULT NULL,
`Password` varchar(50) not null,
  PRIMARY KEY (`User_Id`)
) ;

CREATE TABLE User_PayInfo (
  
User_pay_id int(5) not null primary key auto_increment,
User_Id int(10),
zipcode int (10),
Cardnumber int (16),
expdate date,
cvv int(3),
order_id int(5),
Nameoncard varchar(50),
foreign key (User_Id) references User_Info (User_Id));
User_Credentail  
CREATE TABLE User_Access_Rights (
access_id int(5) primary key auto_increment not null,
User_Type varchar(50) not null,
Subscription_Type varchar(50) ,
rights varchar(50) not null,
Rights_FLAG varchar(3) not null);

select * from User_Credentail