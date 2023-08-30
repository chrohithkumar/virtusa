/* Auth is just a file name of an sql */
create table Login(
email  varchar (50)   ,
password varchar(20)
)

select * from Login

create Procedure Login_Get
As
begin
select * from Login
end

create Procedure Login_Insert(@email varchar(50),@password varchar(20))
as
begin
insert into Login (email,password) values(@email,@password)
end

-- Call the Login_Insert stored procedure with values for parameters
EXEC Login_Insert 'example@email.com', 'password123'


create table Register(
id int identity(1,1),
username varchar(20),
password varchar(20),
mobilenumber varchar(20),
email  varchar(50) primary key,

)
 
 create procedure Register_Get
 as
 begin
 select * from Register
 end



 create procedure Register_Insert(@username varchar(20),@password varchar(20),@mobilenumber varchar(20),@email varchar(50))
 as
 begin 
 insert into Register (username,password,mobilenumber,email) values(@username,@password,@mobilenumber,@email)
 end

 insert into Login (email,password) values('Rohith@Rohith.com','9951062449@Ro')

  insert into Register (username,password,mobilenumber,email) values('rohit','99510','9951062449','rohith.rohith5734@gmail.com')