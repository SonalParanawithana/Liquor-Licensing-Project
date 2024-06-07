SHOW databases;

CREATE DATABASE liquordata;

CREATE TABLE barOwner(

	licenseeID varchar(5),
    licenseefirstName varchar(150),
    licenseeSurname varchar(150),
    licenseeEmail varchar(50),
    licenseePassword varchar(30),
    licenseenicNumber int(10),
    licenseecontactNumber varchar(10),
    licenseeAddress varchar(255)
	
);

CREATE TABLE exciseInspector(
	
    inspectorID varchar(5),
	inspectorName varchar(50),
    inspectorEmail varchar(50),
    inspectorPassword varchar(30),
    inspectorApproval boolean,
    inspectorComment varchar(255)

);

CREATE TABLE OIC(

	oicID varchar(5),
    oicName varchar(50), 
    oicEmail varchar(50),
    oicPassword varchar(30),
	oicApproval boolean
);

CREATE TABLE superintendent(

	superID varchar(5),
    superName varchar(50)
    superEmail varchar(50),
    superPassword varchar(30),
    superApproval boolean

);

CREATE TABLE asCommissioner(

	commID varchar(5),
    commName varchar(50)
    commEmail varchar(50),
    commPassword varchar(30),
    commApproval boolean

);


CREATE TABLE ContactUs (
    contactform_name varchar(50),
    contactform_email varchar(50),
    contactform_query varchar(500)
);