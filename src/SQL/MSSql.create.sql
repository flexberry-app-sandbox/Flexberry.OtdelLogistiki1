﻿



CREATE TABLE [ТЧВодитель] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Допущен] BIT  NULL,

	 [ТабелНомер] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТчДвижГСМ] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [Количество] FLOAT  NULL,

	 [МаркаГСМ] VARCHAR(255)  NULL,

	 [Остаток] FLOAT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Договор] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаЗаключ] DATETIME  NULL,

	 [ДатаНачала] DATETIME  NULL,

	 [ДатаОконч] DATETIME  NULL,

	 [ОбязанПосред] VARCHAR(255)  NULL,

	 [Организация] UNIQUEIDENTIFIER  NOT NULL,

	 [РукОтдЛог] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ПутевойЛист] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВыдатьТоплива] INT  NULL,

	 [ГаражНомер] INT  NULL,

	 [Номер] INT  NULL,

	 [СопровожЛица] VARCHAR(255)  NULL,

	 [РукОтдЛог] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ЖурналУчета] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВремяВозвр] DATETIME  NULL,

	 [ВремяВыезда] DATETIME  NULL,

	 [Дата] DATETIME  NULL,

	 [ПоказСпидом] FLOAT  NULL,

	 [Примечания] VARCHAR(255)  NULL,

	 [Пробег] FLOAT  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [РукОтдЛог] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Контрагент] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Организация] VARCHAR(255)  NULL,

	 [ОтветсЛицо] VARCHAR(255)  NULL,

	 [Договор] UNIQUEIDENTIFIER  NOT NULL,

	 [РукОтдЛог] UNIQUEIDENTIFIER  NOT NULL,

	 [ТЧЗаданВод] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [РукОтдЛог] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Персонал] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Контакты] VARCHAR(255)  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [РукОтдЛог] UNIQUEIDENTIFIER  NOT NULL,

	 [ТЧВодитель] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТчРабВодАвто] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВремяРаботы] FLOAT  NULL,

	 [ДатаВремя] DATETIME  NULL,

	 [НулевойПробег] FLOAT  NULL,

	 [ПоказСпидом] FLOAT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТранспСр] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ГосЗнак] VARCHAR(255)  NULL,

	 [Марка] VARCHAR(255)  NULL,

	 [Модель] VARCHAR(255)  NULL,

	 [Журнал учета] UNIQUEIDENTIFIER  NOT NULL,

	 [Персонал] UNIQUEIDENTIFIER  NOT NULL,

	 [ПутевойЛист] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Должности] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDДолжности] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [Персонал] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧЗаданВод] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаВремя] DATETIME  NULL,

	 [ПунктНазнач] VARCHAR(255)  NULL,

	 [ПунктОтправ] VARCHAR(255)  NULL,

	 [Расстояние] FLOAT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Организация] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ИНН] INT  NULL,

	 [КПП] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [ОГРН] INT  NULL,

	 [Почта] VARCHAR(255)  NULL,

	 [Телефон] INT  NULL,

	 [ЮрАдрес] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




