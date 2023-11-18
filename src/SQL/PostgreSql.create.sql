




CREATE TABLE ТЧВодитель (
 primaryKey UUID NOT NULL,
 ТабелНомер INT NULL,
 Допущен BOOLEAN NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТчДвижГСМ (
 primaryKey UUID NOT NULL,
 Количество DOUBLE PRECISION NULL,
 Дата TIMESTAMP(3) NULL,
 Остаток DOUBLE PRECISION NULL,
 МаркаГСМ VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Договор (
 primaryKey UUID NOT NULL,
 ДатаЗаключ TIMESTAMP(3) NULL,
 ДатаОконч TIMESTAMP(3) NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 ОбязанПосред VARCHAR(255) NULL,
 Организация UUID NOT NULL,
 РукОтдЛог UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПутевойЛист (
 primaryKey UUID NOT NULL,
 ВыдатьТоплива INT NULL,
 Номер INT NULL,
 СопровожЛица VARCHAR(255) NULL,
 ГаражНомер INT NULL,
 РукОтдЛог UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЖурналУчета (
 primaryKey UUID NOT NULL,
 Пробег DOUBLE PRECISION NULL,
 ФИО VARCHAR(255) NULL,
 ВремяВыезда TIMESTAMP(3) NULL,
 ПоказСпидом DOUBLE PRECISION NULL,
 ВремяВозвр TIMESTAMP(3) NULL,
 Примечания VARCHAR(255) NULL,
 Дата TIMESTAMP(3) NULL,
 РукОтдЛог UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Контрагент (
 primaryKey UUID NOT NULL,
 Организация VARCHAR(255) NULL,
 ОтветсЛицо VARCHAR(255) NULL,
 РукОтдЛог UUID NOT NULL,
 Договор UUID NOT NULL,
 ТЧЗаданВод UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РукОтдЛог (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Персонал (
 primaryKey UUID NOT NULL,
 Контакты VARCHAR(255) NULL,
 ФИО VARCHAR(255) NULL,
 РукОтдЛог UUID NOT NULL,
 ТЧВодитель UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТчРабВодАвто (
 primaryKey UUID NOT NULL,
 ПоказСпидом DOUBLE PRECISION NULL,
 ВремяРаботы DOUBLE PRECISION NULL,
 НулевойПробег DOUBLE PRECISION NULL,
 ДатаВремя TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТранспСр (
 primaryKey UUID NOT NULL,
 Марка VARCHAR(255) NULL,
 ГосЗнак VARCHAR(255) NULL,
 Модель VARCHAR(255) NULL,
 Персонал UUID NOT NULL,
 Журнал учета UUID NOT NULL,
 ПутевойЛист UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 IDДолжности INT NULL,
 Персонал UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧЗаданВод (
 primaryKey UUID NOT NULL,
 Расстояние DOUBLE PRECISION NULL,
 ДатаВремя TIMESTAMP(3) NULL,
 ПунктНазнач VARCHAR(255) NULL,
 ПунктОтправ VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организация (
 primaryKey UUID NOT NULL,
 ИНН INT NULL,
 Телефон INT NULL,
 ОГРН INT NULL,
 Почта VARCHAR(255) NULL,
 ЮрАдрес VARCHAR(255) NULL,
 Наименование VARCHAR(255) NULL,
 КПП INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Договор ADD CONSTRAINT FKdae20386adafafa5414e439ca25af8b657797878 FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Indexdae20386adafafa5414e439ca25af8b657797878 on Договор (Организация); 

 ALTER TABLE Договор ADD CONSTRAINT FK3c35d73f6883280f401fde53b1bb08da5e95e60a FOREIGN KEY (РукОтдЛог) REFERENCES РукОтдЛог; 
CREATE INDEX Index3c35d73f6883280f401fde53b1bb08da5e95e60a on Договор (РукОтдЛог); 

 ALTER TABLE ПутевойЛист ADD CONSTRAINT FK8ffe3e5e0270ef35c572bc0557087d843793722c FOREIGN KEY (РукОтдЛог) REFERENCES РукОтдЛог; 
CREATE INDEX Index8ffe3e5e0270ef35c572bc0557087d843793722c on ПутевойЛист (РукОтдЛог); 

 ALTER TABLE ЖурналУчета ADD CONSTRAINT FK17c24fd2d6d591f7beab7614b9b23d5b197924a1 FOREIGN KEY (РукОтдЛог) REFERENCES РукОтдЛог; 
CREATE INDEX Index17c24fd2d6d591f7beab7614b9b23d5b197924a1 on ЖурналУчета (РукОтдЛог); 

 ALTER TABLE Контрагент ADD CONSTRAINT FK1ab63f86863eafa32268054bb74edee2f440d347 FOREIGN KEY (РукОтдЛог) REFERENCES РукОтдЛог; 
CREATE INDEX Index1ab63f86863eafa32268054bb74edee2f440d347 on Контрагент (РукОтдЛог); 

 ALTER TABLE Контрагент ADD CONSTRAINT FKe1cf2b355d0dd428f8cdaaf411c794c81cb1d49d FOREIGN KEY (Договор) REFERENCES Договор; 
CREATE INDEX Indexe1cf2b355d0dd428f8cdaaf411c794c81cb1d49d on Контрагент (Договор); 

 ALTER TABLE Контрагент ADD CONSTRAINT FK0d050ddc2acfaf4e9ff4abb2455cb262b0c58288 FOREIGN KEY (ТЧЗаданВод) REFERENCES ТЧЗаданВод; 
CREATE INDEX Index0d050ddc2acfaf4e9ff4abb2455cb262b0c58288 on Контрагент (ТЧЗаданВод); 

 ALTER TABLE Персонал ADD CONSTRAINT FK6996093cf2efb8abdda7f81b03315b7aaf20557c FOREIGN KEY (РукОтдЛог) REFERENCES РукОтдЛог; 
CREATE INDEX Index6996093cf2efb8abdda7f81b03315b7aaf20557c on Персонал (РукОтдЛог); 

 ALTER TABLE Персонал ADD CONSTRAINT FK28e523fa90e1dfc02855f6f22b5bc0576b4eae12 FOREIGN KEY (ТЧВодитель) REFERENCES ТЧВодитель; 
CREATE INDEX Index28e523fa90e1dfc02855f6f22b5bc0576b4eae12 on Персонал (ТЧВодитель); 

 ALTER TABLE ТранспСр ADD CONSTRAINT FK34774dd65c4ba29110c04b852f6faa1c7f6f33bc FOREIGN KEY (Персонал) REFERENCES Персонал; 
CREATE INDEX Index34774dd65c4ba29110c04b852f6faa1c7f6f33bc on ТранспСр (Персонал); 

 ALTER TABLE ТранспСр ADD CONSTRAINT FKf7fd67d3b0632c8337359e133be34978c9a084b9 FOREIGN KEY (Журнал учета) REFERENCES ЖурналУчета; 
CREATE INDEX Indexf7fd67d3b0632c8337359e133be34978c9a084b9 on ТранспСр (Журнал учета); 

 ALTER TABLE ТранспСр ADD CONSTRAINT FK744e2899ef93be46add814a43fd5d752e4a4b0a6 FOREIGN KEY (ПутевойЛист) REFERENCES ПутевойЛист; 
CREATE INDEX Index744e2899ef93be46add814a43fd5d752e4a4b0a6 on ТранспСр (ПутевойЛист); 

 ALTER TABLE Должности ADD CONSTRAINT FK84a6a049271cd851b3502d61151a94f276948495 FOREIGN KEY (Персонал) REFERENCES Персонал; 
CREATE INDEX Index84a6a049271cd851b3502d61151a94f276948495 on Должности (Персонал); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

