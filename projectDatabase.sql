create database vehicle_Loan;
drop table scheme;
drop table application;
drop table bookmarkedApplication;
drop table account;
drop table transaction;
drop table loan;


use vehicle_Loan;



create table admin(
adminId int primary key,
firstName varchar(20),
lastName varchar(20),
adminEmail varchar(20),
adminPassword varchar(16)
);


create table account(
accountId int primary key auto_increment,
accountname varchar(50) not null,
phone varchar(10) unique not null,
email varchar(30),
adharNumber varchar(12) unique not null,
panNumber varchar(15) unique not null,
accountPassword varchar(16) not null,
accountActive boolean default true 
);


create table scheme(
schemeId int primary key  auto_increment,
fromDate Date,
toDate Date,
rateOfInterest float(24),
tenure int,
vehicleType varchar(15)
);

create table application(
application_id int primary key  auto_increment,
loanAmount float(24),
applicationStatus varchar(30),
dateOfApplication date,
rateOfInt float(24),
tenure int,
schemeId int,
accountId int,
FOREIGN KEY (schemeId) REFERENCES scheme(schemeId),
FOREIGN Key(accountId) REFERENCES account(accountId)
);







create table bookmarkedApplication(
application_id int,
adminId int,
FOREIGN KEY (application_id) REFERENCES application(application_id),
FOREIGN KEY (adminId) REFERENCES admin(adminId)
);




create table loan(
loanId int primary key  auto_increment,
EMI float(24),
pendingAmount float(24),
pendingTenure int,
nextPayDate date,
accountId int ,
FOREIGN Key(accountId) REFERENCES account(accountId)
);



create table transaction(
transactionId int  auto_increment,
amount float(24),
transactionDate datetime,
modeOfPayment varchar(20),
accountId int,
loanId int,
primary key(transactionId,accountId,loanId)
);







Insert into admin values( 001, "Param", "Jangle", "param@gmail.com","123456");
insert into admin values( 002, "Prem", "G", "prem@gmail.com","123456");
  
insert into account values(100,"Allauddin","8867197747","aaj@gmail.com","789456123","CLJDDJ114S","123456",1);
insert into account values(101,"Mahadev","5487986547","mah@gmail.com","54785421","LASJI1234F","123456",1);
insert into account values(102,"Ridham","1245698745","rid@gmail.com","1425784512","LAPIT1458S","123456",1);
insert into account values(103,"Aditya","6587745874","adi@gmail.com","3652147855","LJDRT2547Y","123456",1);

insert into scheme values(1,"2023-01-01","2023-10-01",8.9,18,"Two_Wheeler");
insert into scheme values(2,"2023-02-01","2023-10-01",8.5,19,"Heavy_Vehicle");
insert into scheme values(3,"2023-03-01","2023-10-01",8.4,12,"FOUR_Wheeler");
insert into scheme values(4,"2023-04-01","2023-10-01",8.3,20,"Two_Wheeler");
insert into scheme values(5,"2023-05-01","2023-10-01",8.2,24,"Heavy_Vehicle");
insert into scheme values(6,"2023-06-01","2023-10-01",8.1,36,"FOUR_Wheeler");


insert into application values(100,100000.00,"PENDING","2023-03-17",8.9,18,1,100);
insert into application values(101,200000.00,"ACCEPTED","2023-03-17",8.5,19,2,101);
insert into application values(102,300000.00,"BOOKMARKED","2023-03-17",8.4,12,3,101);
insert into application values(103,300000.00,"ACCEPTED","2023-03-17",8.3,20,4,102);
insert into application values(104,400000.00,"REJECTED","2023-03-17",8.2,24,5,103);
insert into application values(105,600000.00,"ACCEPTED","2023-03-17",8.1,36,6,102);

select * from admin;
select * from account;
select * from scheme;
select * from application;


