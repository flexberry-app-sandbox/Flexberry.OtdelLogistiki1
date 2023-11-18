﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.OtdelLogistiki
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Договор.
    /// </summary>
    // *** Start programmer edit section *** (Договор CustomAttributes)

    // *** End programmer edit section *** (Договор CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДоговорE", new string[] {
            "ДатаЗаключ as \'Дата заключ\'",
            "ДатаОконч as \'Дата оконч\'",
            "ДатаНачала as \'Дата начала\'",
            "ОбязанПосред as \'Обязан посред\'",
            "Организация as \'Организация\'",
            "Организация.Почта as \'Почта\'",
            "РукОтдЛог as \'Рук отд лог\'",
            "РукОтдЛог.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Организация.Почта",
            "РукОтдЛог.ФИО"})]
    [MasterViewDefineAttribute("ДоговорE", "Организация", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Почта")]
    [MasterViewDefineAttribute("ДоговорE", "РукОтдЛог", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ДоговорL", new string[] {
            "ДатаЗаключ as \'Дата заключ\'",
            "ДатаОконч as \'Дата оконч\'",
            "ДатаНачала as \'Дата начала\'",
            "ОбязанПосред as \'Обязан посред\'",
            "Организация.Почта as \'Почта\'",
            "РукОтдЛог.ФИО as \'ФИО\'"})]
    public class Договор : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаЗаключ;
        
        private System.DateTime fДатаОконч;
        
        private System.DateTime fДатаНачала;
        
        private string fОбязанПосред;
        
        private IIS.OtdelLogistiki.Организация fОрганизация;
        
        private IIS.OtdelLogistiki.РукОтдЛог fРукОтдЛог;
        
        // *** Start programmer edit section *** (Договор CustomMembers)

        // *** End programmer edit section *** (Договор CustomMembers)

        
        /// <summary>
        /// ДатаЗаключ.
        /// </summary>
        // *** Start programmer edit section *** (Договор.ДатаЗаключ CustomAttributes)

        // *** End programmer edit section *** (Договор.ДатаЗаключ CustomAttributes)
        public virtual System.DateTime ДатаЗаключ
        {
            get
            {
                // *** Start programmer edit section *** (Договор.ДатаЗаключ Get start)

                // *** End programmer edit section *** (Договор.ДатаЗаключ Get start)
                System.DateTime result = this.fДатаЗаключ;
                // *** Start programmer edit section *** (Договор.ДатаЗаключ Get end)

                // *** End programmer edit section *** (Договор.ДатаЗаключ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Договор.ДатаЗаключ Set start)

                // *** End programmer edit section *** (Договор.ДатаЗаключ Set start)
                this.fДатаЗаключ = value;
                // *** Start programmer edit section *** (Договор.ДатаЗаключ Set end)

                // *** End programmer edit section *** (Договор.ДатаЗаключ Set end)
            }
        }
        
        /// <summary>
        /// ДатаНачала.
        /// </summary>
        // *** Start programmer edit section *** (Договор.ДатаНачала CustomAttributes)

        // *** End programmer edit section *** (Договор.ДатаНачала CustomAttributes)
        public virtual System.DateTime ДатаНачала
        {
            get
            {
                // *** Start programmer edit section *** (Договор.ДатаНачала Get start)

                // *** End programmer edit section *** (Договор.ДатаНачала Get start)
                System.DateTime result = this.fДатаНачала;
                // *** Start programmer edit section *** (Договор.ДатаНачала Get end)

                // *** End programmer edit section *** (Договор.ДатаНачала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Договор.ДатаНачала Set start)

                // *** End programmer edit section *** (Договор.ДатаНачала Set start)
                this.fДатаНачала = value;
                // *** Start programmer edit section *** (Договор.ДатаНачала Set end)

                // *** End programmer edit section *** (Договор.ДатаНачала Set end)
            }
        }
        
        /// <summary>
        /// ДатаОконч.
        /// </summary>
        // *** Start programmer edit section *** (Договор.ДатаОконч CustomAttributes)

        // *** End programmer edit section *** (Договор.ДатаОконч CustomAttributes)
        public virtual System.DateTime ДатаОконч
        {
            get
            {
                // *** Start programmer edit section *** (Договор.ДатаОконч Get start)

                // *** End programmer edit section *** (Договор.ДатаОконч Get start)
                System.DateTime result = this.fДатаОконч;
                // *** Start programmer edit section *** (Договор.ДатаОконч Get end)

                // *** End programmer edit section *** (Договор.ДатаОконч Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Договор.ДатаОконч Set start)

                // *** End programmer edit section *** (Договор.ДатаОконч Set start)
                this.fДатаОконч = value;
                // *** Start programmer edit section *** (Договор.ДатаОконч Set end)

                // *** End programmer edit section *** (Договор.ДатаОконч Set end)
            }
        }
        
        /// <summary>
        /// ОбязанПосред.
        /// </summary>
        // *** Start programmer edit section *** (Договор.ОбязанПосред CustomAttributes)

        // *** End programmer edit section *** (Договор.ОбязанПосред CustomAttributes)
        [StrLen(255)]
        public virtual string ОбязанПосред
        {
            get
            {
                // *** Start programmer edit section *** (Договор.ОбязанПосред Get start)

                // *** End programmer edit section *** (Договор.ОбязанПосред Get start)
                string result = this.fОбязанПосред;
                // *** Start programmer edit section *** (Договор.ОбязанПосред Get end)

                // *** End programmer edit section *** (Договор.ОбязанПосред Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Договор.ОбязанПосред Set start)

                // *** End programmer edit section *** (Договор.ОбязанПосред Set start)
                this.fОбязанПосред = value;
                // *** Start programmer edit section *** (Договор.ОбязанПосред Set end)

                // *** End programmer edit section *** (Договор.ОбязанПосред Set end)
            }
        }
        
        /// <summary>
        /// Договор.
        /// </summary>
        // *** Start programmer edit section *** (Договор.Организация CustomAttributes)

        // *** End programmer edit section *** (Договор.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.OtdelLogistiki.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (Договор.Организация Get start)

                // *** End programmer edit section *** (Договор.Организация Get start)
                IIS.OtdelLogistiki.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (Договор.Организация Get end)

                // *** End programmer edit section *** (Договор.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Договор.Организация Set start)

                // *** End programmer edit section *** (Договор.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (Договор.Организация Set end)

                // *** End programmer edit section *** (Договор.Организация Set end)
            }
        }
        
        /// <summary>
        /// Договор.
        /// </summary>
        // *** Start programmer edit section *** (Договор.РукОтдЛог CustomAttributes)

        // *** End programmer edit section *** (Договор.РукОтдЛог CustomAttributes)
        [PropertyStorage(new string[] {
                "РукОтдЛог"})]
        [NotNull()]
        public virtual IIS.OtdelLogistiki.РукОтдЛог РукОтдЛог
        {
            get
            {
                // *** Start programmer edit section *** (Договор.РукОтдЛог Get start)

                // *** End programmer edit section *** (Договор.РукОтдЛог Get start)
                IIS.OtdelLogistiki.РукОтдЛог result = this.fРукОтдЛог;
                // *** Start programmer edit section *** (Договор.РукОтдЛог Get end)

                // *** End programmer edit section *** (Договор.РукОтдЛог Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Договор.РукОтдЛог Set start)

                // *** End programmer edit section *** (Договор.РукОтдЛог Set start)
                this.fРукОтдЛог = value;
                // *** Start programmer edit section *** (Договор.РукОтдЛог Set end)

                // *** End programmer edit section *** (Договор.РукОтдЛог Set end)
            }
        }
        
        // *** Start programmer edit section *** (Договор.Отправить CustomAttributes)

        // *** End programmer edit section *** (Договор.Отправить CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Отправить()
        {
            // *** Start programmer edit section *** (Договор.Отправить method implementation)

            return;
            // *** End programmer edit section *** (Договор.Отправить method implementation)
        }
        
        // *** Start programmer edit section *** (Договор.Распечатать CustomAttributes)

        // *** End programmer edit section *** (Договор.Распечатать CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Распечатать()
        {
            // *** Start programmer edit section *** (Договор.Распечатать method implementation)

            return;
            // *** End programmer edit section *** (Договор.Распечатать method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДоговорE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДоговорE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДоговорE", typeof(IIS.OtdelLogistiki.Договор));
                }
            }
            
            /// <summary>
            /// "ДоговорL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДоговорL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДоговорL", typeof(IIS.OtdelLogistiki.Договор));
                }
            }
        }
    }
}
