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
    /// Контрагент.
    /// </summary>
    // *** Start programmer edit section *** (Контрагент CustomAttributes)

    // *** End programmer edit section *** (Контрагент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КонтрагентE", new string[] {
            "Организация as \'Организация\'",
            "ОтветсЛицо as \'Ответс лицо\'",
            "РукОтдЛог as \'Рук отд лог\'",
            "РукОтдЛог.ФИО as \'ФИО\'",
            "Договор as \'Договор\'",
            "Договор.ОбязанПосред as \'Обязан посред\'",
            "ТЧЗаданВод as \'Т ч задан вод\'",
            "ТЧЗаданВод.ПунктНазнач as \'Пункт назнач\'"}, Hidden=new string[] {
            "РукОтдЛог.ФИО",
            "Договор.ОбязанПосред",
            "ТЧЗаданВод.ПунктНазнач"})]
    [MasterViewDefineAttribute("КонтрагентE", "РукОтдЛог", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("КонтрагентE", "Договор", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ОбязанПосред")]
    [MasterViewDefineAttribute("КонтрагентE", "ТЧЗаданВод", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ПунктНазнач")]
    [View("КонтрагентL", new string[] {
            "Организация as \'Организация\'",
            "ОтветсЛицо as \'Ответс лицо\'",
            "РукОтдЛог.ФИО as \'ФИО\'",
            "Договор.ОбязанПосред as \'Обязан посред\'",
            "ТЧЗаданВод.ПунктНазнач as \'Пункт назнач\'"})]
    public class Контрагент : ICSSoft.STORMNET.DataObject
    {
        
        private string fОрганизация;
        
        private string fОтветсЛицо;
        
        private IIS.OtdelLogistiki.РукОтдЛог fРукОтдЛог;
        
        private IIS.OtdelLogistiki.Договор fДоговор;
        
        private IIS.OtdelLogistiki.ТЧЗаданВод fТЧЗаданВод;
        
        // *** Start programmer edit section *** (Контрагент CustomMembers)

        // *** End programmer edit section *** (Контрагент CustomMembers)

        
        /// <summary>
        /// Организация.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.Организация CustomAttributes)

        // *** End programmer edit section *** (Контрагент.Организация CustomAttributes)
        [StrLen(255)]
        public virtual string Организация
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.Организация Get start)

                // *** End programmer edit section *** (Контрагент.Организация Get start)
                string result = this.fОрганизация;
                // *** Start programmer edit section *** (Контрагент.Организация Get end)

                // *** End programmer edit section *** (Контрагент.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.Организация Set start)

                // *** End programmer edit section *** (Контрагент.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (Контрагент.Организация Set end)

                // *** End programmer edit section *** (Контрагент.Организация Set end)
            }
        }
        
        /// <summary>
        /// ОтветсЛицо.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.ОтветсЛицо CustomAttributes)

        // *** End programmer edit section *** (Контрагент.ОтветсЛицо CustomAttributes)
        [StrLen(255)]
        public virtual string ОтветсЛицо
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.ОтветсЛицо Get start)

                // *** End programmer edit section *** (Контрагент.ОтветсЛицо Get start)
                string result = this.fОтветсЛицо;
                // *** Start programmer edit section *** (Контрагент.ОтветсЛицо Get end)

                // *** End programmer edit section *** (Контрагент.ОтветсЛицо Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.ОтветсЛицо Set start)

                // *** End programmer edit section *** (Контрагент.ОтветсЛицо Set start)
                this.fОтветсЛицо = value;
                // *** Start programmer edit section *** (Контрагент.ОтветсЛицо Set end)

                // *** End programmer edit section *** (Контрагент.ОтветсЛицо Set end)
            }
        }
        
        /// <summary>
        /// Контрагент.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.Договор CustomAttributes)

        // *** End programmer edit section *** (Контрагент.Договор CustomAttributes)
        [PropertyStorage(new string[] {
                "Договор"})]
        [NotNull()]
        public virtual IIS.OtdelLogistiki.Договор Договор
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.Договор Get start)

                // *** End programmer edit section *** (Контрагент.Договор Get start)
                IIS.OtdelLogistiki.Договор result = this.fДоговор;
                // *** Start programmer edit section *** (Контрагент.Договор Get end)

                // *** End programmer edit section *** (Контрагент.Договор Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.Договор Set start)

                // *** End programmer edit section *** (Контрагент.Договор Set start)
                this.fДоговор = value;
                // *** Start programmer edit section *** (Контрагент.Договор Set end)

                // *** End programmer edit section *** (Контрагент.Договор Set end)
            }
        }
        
        /// <summary>
        /// Контрагент.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.РукОтдЛог CustomAttributes)

        // *** End programmer edit section *** (Контрагент.РукОтдЛог CustomAttributes)
        [PropertyStorage(new string[] {
                "РукОтдЛог"})]
        [NotNull()]
        public virtual IIS.OtdelLogistiki.РукОтдЛог РукОтдЛог
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.РукОтдЛог Get start)

                // *** End programmer edit section *** (Контрагент.РукОтдЛог Get start)
                IIS.OtdelLogistiki.РукОтдЛог result = this.fРукОтдЛог;
                // *** Start programmer edit section *** (Контрагент.РукОтдЛог Get end)

                // *** End programmer edit section *** (Контрагент.РукОтдЛог Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.РукОтдЛог Set start)

                // *** End programmer edit section *** (Контрагент.РукОтдЛог Set start)
                this.fРукОтдЛог = value;
                // *** Start programmer edit section *** (Контрагент.РукОтдЛог Set end)

                // *** End programmer edit section *** (Контрагент.РукОтдЛог Set end)
            }
        }
        
        /// <summary>
        /// Контрагент.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.ТЧЗаданВод CustomAttributes)

        // *** End programmer edit section *** (Контрагент.ТЧЗаданВод CustomAttributes)
        [PropertyStorage(new string[] {
                "ТЧЗаданВод"})]
        [NotNull()]
        public virtual IIS.OtdelLogistiki.ТЧЗаданВод ТЧЗаданВод
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.ТЧЗаданВод Get start)

                // *** End programmer edit section *** (Контрагент.ТЧЗаданВод Get start)
                IIS.OtdelLogistiki.ТЧЗаданВод result = this.fТЧЗаданВод;
                // *** Start programmer edit section *** (Контрагент.ТЧЗаданВод Get end)

                // *** End programmer edit section *** (Контрагент.ТЧЗаданВод Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.ТЧЗаданВод Set start)

                // *** End programmer edit section *** (Контрагент.ТЧЗаданВод Set start)
                this.fТЧЗаданВод = value;
                // *** Start programmer edit section *** (Контрагент.ТЧЗаданВод Set end)

                // *** End programmer edit section *** (Контрагент.ТЧЗаданВод Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КонтрагентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентE", typeof(IIS.OtdelLogistiki.Контрагент));
                }
            }
            
            /// <summary>
            /// "КонтрагентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентL", typeof(IIS.OtdelLogistiki.Контрагент));
                }
            }
        }
    }
}
