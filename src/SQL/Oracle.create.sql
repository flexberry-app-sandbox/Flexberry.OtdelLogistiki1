﻿



CREATE TABLE "ТЧВодитель"
(

	"primaryKey" RAW(16) NOT NULL,

	"ТабелНомер" NUMBER(10) NULL,

	"Допущен" NUMBER(1) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТчДвижГСМ"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" FLOAT(126) NULL,

	"Дата" DATE NULL,

	"Остаток" FLOAT(126) NULL,

	"МаркаГСМ" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Договор"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаЗаключ" DATE NULL,

	"ДатаОконч" DATE NULL,

	"ДатаНачала" DATE NULL,

	"ОбязанПосред" NVARCHAR2(255) NULL,

	"Организация" RAW(16) NOT NULL,

	"РукОтдЛог" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПутевойЛист"
(

	"primaryKey" RAW(16) NOT NULL,

	"ВыдатьТоплива" NUMBER(10) NULL,

	"Номер" NUMBER(10) NULL,

	"СопровожЛица" NVARCHAR2(255) NULL,

	"ГаражНомер" NUMBER(10) NULL,

	"РукОтдЛог" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЖурналУчета"
(

	"primaryKey" RAW(16) NOT NULL,

	"Пробег" FLOAT(126) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"ВремяВыезда" DATE NULL,

	"ПоказСпидом" FLOAT(126) NULL,

	"ВремяВозвр" DATE NULL,

	"Примечания" NVARCHAR2(255) NULL,

	"Дата" DATE NULL,

	"РукОтдЛог" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Контрагент"
(

	"primaryKey" RAW(16) NOT NULL,

	"Организация" NVARCHAR2(255) NULL,

	"ОтветсЛицо" NVARCHAR2(255) NULL,

	"РукОтдЛог" RAW(16) NOT NULL,

	"Договор" RAW(16) NOT NULL,

	"ТЧЗаданВод" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РукОтдЛог"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Персонал"
(

	"primaryKey" RAW(16) NOT NULL,

	"Контакты" NVARCHAR2(255) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"РукОтдЛог" RAW(16) NOT NULL,

	"ТЧВодитель" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТчРабВодАвто"
(

	"primaryKey" RAW(16) NOT NULL,

	"ПоказСпидом" FLOAT(126) NULL,

	"ВремяРаботы" FLOAT(126) NULL,

	"НулевойПробег" FLOAT(126) NULL,

	"ДатаВремя" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТранспСр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Марка" NVARCHAR2(255) NULL,

	"ГосЗнак" NVARCHAR2(255) NULL,

	"Модель" NVARCHAR2(255) NULL,

	"Персонал" RAW(16) NOT NULL,

	"Журнал учета" RAW(16) NOT NULL,

	"ПутевойЛист" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"IDДолжности" NUMBER(10) NULL,

	"Персонал" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧЗаданВод"
(

	"primaryKey" RAW(16) NOT NULL,

	"Расстояние" FLOAT(126) NULL,

	"ДатаВремя" DATE NULL,

	"ПунктНазнач" NVARCHAR2(255) NULL,

	"ПунктОтправ" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Организация"
(

	"primaryKey" RAW(16) NOT NULL,

	"ИНН" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"ОГРН" NUMBER(10) NULL,

	"Почта" NVARCHAR2(255) NULL,

	"ЮрАдрес" NVARCHAR2(255) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"КПП" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Договор"
	ADD CONSTRAINT "Договор_FОрга_5830" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "Договор_IОрга_9987" on "Договор" ("Организация");

ALTER TABLE "Договор"
	ADD CONSTRAINT "Договор_FРукО_2166" FOREIGN KEY ("РукОтдЛог") REFERENCES "РукОтдЛог" ("primaryKey");

CREATE INDEX "Договор_IРукО_7678" on "Договор" ("РукОтдЛог");

ALTER TABLE "ПутевойЛист"
	ADD CONSTRAINT "ПутевойЛист_F_9417" FOREIGN KEY ("РукОтдЛог") REFERENCES "РукОтдЛог" ("primaryKey");

CREATE INDEX "ПутевойЛист_I_6818" on "ПутевойЛист" ("РукОтдЛог");

ALTER TABLE "ЖурналУчета"
	ADD CONSTRAINT "ЖурналУчета_F_2502" FOREIGN KEY ("РукОтдЛог") REFERENCES "РукОтдЛог" ("primaryKey");

CREATE INDEX "ЖурналУчета_I_8785" on "ЖурналУчета" ("РукОтдЛог");

ALTER TABLE "Контрагент"
	ADD CONSTRAINT "Контрагент_FР_7726" FOREIGN KEY ("РукОтдЛог") REFERENCES "РукОтдЛог" ("primaryKey");

CREATE INDEX "Контрагент_IР_6697" on "Контрагент" ("РукОтдЛог");

ALTER TABLE "Контрагент"
	ADD CONSTRAINT "Контрагент_FД_4263" FOREIGN KEY ("Договор") REFERENCES "Договор" ("primaryKey");

CREATE INDEX "Контрагент_IД_3264" on "Контрагент" ("Договор");

ALTER TABLE "Контрагент"
	ADD CONSTRAINT "Контрагент_FТ_5825" FOREIGN KEY ("ТЧЗаданВод") REFERENCES "ТЧЗаданВод" ("primaryKey");

CREATE INDEX "Контрагент_IТ_3188" on "Контрагент" ("ТЧЗаданВод");

ALTER TABLE "Персонал"
	ADD CONSTRAINT "Персонал_FРук_9702" FOREIGN KEY ("РукОтдЛог") REFERENCES "РукОтдЛог" ("primaryKey");

CREATE INDEX "Персонал_IРук_3915" on "Персонал" ("РукОтдЛог");

ALTER TABLE "Персонал"
	ADD CONSTRAINT "Персонал_FТЧВ_9380" FOREIGN KEY ("ТЧВодитель") REFERENCES "ТЧВодитель" ("primaryKey");

CREATE INDEX "Персонал_IТЧВо_158" on "Персонал" ("ТЧВодитель");

ALTER TABLE "ТранспСр"
	ADD CONSTRAINT "ТранспСр_FПер_8118" FOREIGN KEY ("Персонал") REFERENCES "Персонал" ("primaryKey");

CREATE INDEX "ТранспСр_IПер_7607" on "ТранспСр" ("Персонал");

ALTER TABLE "ТранспСр"
	ADD CONSTRAINT "ТранспСр_FЖур_8077" FOREIGN KEY ("Журнал учета") REFERENCES "ЖурналУчета" ("primaryKey");

CREATE INDEX "ТранспСр_IЖур_4432" on "ТранспСр" ("Журнал учета");

ALTER TABLE "ТранспСр"
	ADD CONSTRAINT "ТранспСр_FПут_8882" FOREIGN KEY ("ПутевойЛист") REFERENCES "ПутевойЛист" ("primaryKey");

CREATE INDEX "ТранспСр_IПут_2530" on "ТранспСр" ("ПутевойЛист");

ALTER TABLE "Должности"
	ADD CONSTRAINT "Должности_FПе_9033" FOREIGN KEY ("Персонал") REFERENCES "Персонал" ("primaryKey");

CREATE INDEX "Должности_IПе_3027" on "Должности" ("Персонал");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


