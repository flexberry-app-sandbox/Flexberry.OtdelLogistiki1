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
    /// Персонал.
    /// </summary>
    // *** Start programmer edit section *** (Персонал CustomAttributes)

    // *** End programmer edit section *** (Персонал CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПерсоналE", new string[] {
            "Контакты as \'Контакты\'",
            "ФИО as \'ФИО\'",
            "РукОтдЛог as \'Рук отд лог\'",
            "РукОтдЛог.ФИО as \'ФИО\'",
            "ТЧВодитель as \'Т ч водитель\'",
            "ТЧВодитель.ТабелНомер as \'Табел номер\'"}, Hidden=new string[] {
            "РукОтдЛог.ФИО",
            "ТЧВодитель.ТабелНомер"})]
    [MasterViewDefineAttribute("ПерсоналE", "РукОтдЛог", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("ПерсоналE", "ТЧВодитель", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ТабелНомер")]
    [View("ПерсоналL", new string[] {
            "Контакты as \'Контакты\'",
            "ФИО as \'ФИО\'",
            "РукОтдЛог.ФИО as \'ФИО\'",
            "ТЧВодитель.ТабелНомер as \'Табел номер\'"})]
    public class Персонал : ICSSoft.STORMNET.DataObject
    {
        
        private string fКонтакты;
        
        private string fФИО;
        
        private IIS.OtdelLogistiki.РукОтдЛог fРукОтдЛог;
        
        private IIS.OtdelLogistiki.ТЧВодитель fТЧВодитель;
        
        // *** Start programmer edit section *** (Персонал CustomMembers)

        // *** End programmer edit section *** (Персонал CustomMembers)

        
        /// <summary>
        /// Контакты.
        /// </summary>
        // *** Start programmer edit section *** (Персонал.Контакты CustomAttributes)

        // *** End programmer edit section *** (Персонал.Контакты CustomAttributes)
        [StrLen(255)]
        public virtual string Контакты
        {
            get
            {
                // *** Start programmer edit section *** (Персонал.Контакты Get start)

                // *** End programmer edit section *** (Персонал.Контакты Get start)
                string result = this.fКонтакты;
                // *** Start programmer edit section *** (Персонал.Контакты Get end)

                // *** End programmer edit section *** (Персонал.Контакты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Персонал.Контакты Set start)

                // *** End programmer edit section *** (Персонал.Контакты Set start)
                this.fКонтакты = value;
                // *** Start programmer edit section *** (Персонал.Контакты Set end)

                // *** End programmer edit section *** (Персонал.Контакты Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Персонал.ФИО CustomAttributes)

        // *** End programmer edit section *** (Персонал.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Персонал.ФИО Get start)

                // *** End programmer edit section *** (Персонал.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Персонал.ФИО Get end)

                // *** End programmer edit section *** (Персонал.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Персонал.ФИО Set start)

                // *** End programmer edit section *** (Персонал.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Персонал.ФИО Set end)

                // *** End programmer edit section *** (Персонал.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Персонал.
        /// </summary>
        // *** Start programmer edit section *** (Персонал.РукОтдЛог CustomAttributes)

        // *** End programmer edit section *** (Персонал.РукОтдЛог CustomAttributes)
        [PropertyStorage(new string[] {
                "РукОтдЛог"})]
        [NotNull()]
        public virtual IIS.OtdelLogistiki.РукОтдЛог РукОтдЛог
        {
            get
            {
                // *** Start programmer edit section *** (Персонал.РукОтдЛог Get start)

                // *** End programmer edit section *** (Персонал.РукОтдЛог Get start)
                IIS.OtdelLogistiki.РукОтдЛог result = this.fРукОтдЛог;
                // *** Start programmer edit section *** (Персонал.РукОтдЛог Get end)

                // *** End programmer edit section *** (Персонал.РукОтдЛог Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Персонал.РукОтдЛог Set start)

                // *** End programmer edit section *** (Персонал.РукОтдЛог Set start)
                this.fРукОтдЛог = value;
                // *** Start programmer edit section *** (Персонал.РукОтдЛог Set end)

                // *** End programmer edit section *** (Персонал.РукОтдЛог Set end)
            }
        }
        
        /// <summary>
        /// Персонал.
        /// </summary>
        // *** Start programmer edit section *** (Персонал.ТЧВодитель CustomAttributes)

        // *** End programmer edit section *** (Персонал.ТЧВодитель CustomAttributes)
        [PropertyStorage(new string[] {
                "ТЧВодитель"})]
        [NotNull()]
        public virtual IIS.OtdelLogistiki.ТЧВодитель ТЧВодитель
        {
            get
            {
                // *** Start programmer edit section *** (Персонал.ТЧВодитель Get start)

                // *** End programmer edit section *** (Персонал.ТЧВодитель Get start)
                IIS.OtdelLogistiki.ТЧВодитель result = this.fТЧВодитель;
                // *** Start programmer edit section *** (Персонал.ТЧВодитель Get end)

                // *** End programmer edit section *** (Персонал.ТЧВодитель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Персонал.ТЧВодитель Set start)

                // *** End programmer edit section *** (Персонал.ТЧВодитель Set start)
                this.fТЧВодитель = value;
                // *** Start programmer edit section *** (Персонал.ТЧВодитель Set end)

                // *** End programmer edit section *** (Персонал.ТЧВодитель Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПерсоналE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПерсоналE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПерсоналE", typeof(IIS.OtdelLogistiki.Персонал));
                }
            }
            
            /// <summary>
            /// "ПерсоналL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПерсоналL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПерсоналL", typeof(IIS.OtdelLogistiki.Персонал));
                }
            }
        }
    }
}
