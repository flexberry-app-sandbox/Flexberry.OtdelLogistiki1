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
    /// Т ч задан вод.
    /// </summary>
    // *** Start programmer edit section *** (ТЧЗаданВод CustomAttributes)

    // *** End programmer edit section *** (ТЧЗаданВод CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч задан вод")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧЗаданВодE", new string[] {
            "Расстояние as \'Расстояние\'",
            "ДатаВремя as \'Дата время\'",
            "ПунктНазнач as \'Пункт назнач\'",
            "ПунктОтправ as \'Пункт отправ\'"})]
    [View("ТЧЗаданВодL", new string[] {
            "Расстояние as \'Расстояние\'",
            "ДатаВремя as \'Дата время\'",
            "ПунктНазнач as \'Пункт назнач\'",
            "ПунктОтправ as \'Пункт отправ\'"})]
    public class ТЧЗаданВод : ICSSoft.STORMNET.DataObject
    {
        
        private double fРасстояние;
        
        private System.DateTime fДатаВремя;
        
        private string fПунктНазнач;
        
        private string fПунктОтправ;
        
        // *** Start programmer edit section *** (ТЧЗаданВод CustomMembers)

        // *** End programmer edit section *** (ТЧЗаданВод CustomMembers)

        
        /// <summary>
        /// ДатаВремя.
        /// </summary>
        // *** Start programmer edit section *** (ТЧЗаданВод.ДатаВремя CustomAttributes)

        // *** End programmer edit section *** (ТЧЗаданВод.ДатаВремя CustomAttributes)
        public virtual System.DateTime ДатаВремя
        {
            get
            {
                // *** Start programmer edit section *** (ТЧЗаданВод.ДатаВремя Get start)

                // *** End programmer edit section *** (ТЧЗаданВод.ДатаВремя Get start)
                System.DateTime result = this.fДатаВремя;
                // *** Start programmer edit section *** (ТЧЗаданВод.ДатаВремя Get end)

                // *** End programmer edit section *** (ТЧЗаданВод.ДатаВремя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧЗаданВод.ДатаВремя Set start)

                // *** End programmer edit section *** (ТЧЗаданВод.ДатаВремя Set start)
                this.fДатаВремя = value;
                // *** Start programmer edit section *** (ТЧЗаданВод.ДатаВремя Set end)

                // *** End programmer edit section *** (ТЧЗаданВод.ДатаВремя Set end)
            }
        }
        
        /// <summary>
        /// ПунктНазнач.
        /// </summary>
        // *** Start programmer edit section *** (ТЧЗаданВод.ПунктНазнач CustomAttributes)

        // *** End programmer edit section *** (ТЧЗаданВод.ПунктНазнач CustomAttributes)
        [StrLen(255)]
        public virtual string ПунктНазнач
        {
            get
            {
                // *** Start programmer edit section *** (ТЧЗаданВод.ПунктНазнач Get start)

                // *** End programmer edit section *** (ТЧЗаданВод.ПунктНазнач Get start)
                string result = this.fПунктНазнач;
                // *** Start programmer edit section *** (ТЧЗаданВод.ПунктНазнач Get end)

                // *** End programmer edit section *** (ТЧЗаданВод.ПунктНазнач Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧЗаданВод.ПунктНазнач Set start)

                // *** End programmer edit section *** (ТЧЗаданВод.ПунктНазнач Set start)
                this.fПунктНазнач = value;
                // *** Start programmer edit section *** (ТЧЗаданВод.ПунктНазнач Set end)

                // *** End programmer edit section *** (ТЧЗаданВод.ПунктНазнач Set end)
            }
        }
        
        /// <summary>
        /// ПунктОтправ.
        /// </summary>
        // *** Start programmer edit section *** (ТЧЗаданВод.ПунктОтправ CustomAttributes)

        // *** End programmer edit section *** (ТЧЗаданВод.ПунктОтправ CustomAttributes)
        [StrLen(255)]
        public virtual string ПунктОтправ
        {
            get
            {
                // *** Start programmer edit section *** (ТЧЗаданВод.ПунктОтправ Get start)

                // *** End programmer edit section *** (ТЧЗаданВод.ПунктОтправ Get start)
                string result = this.fПунктОтправ;
                // *** Start programmer edit section *** (ТЧЗаданВод.ПунктОтправ Get end)

                // *** End programmer edit section *** (ТЧЗаданВод.ПунктОтправ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧЗаданВод.ПунктОтправ Set start)

                // *** End programmer edit section *** (ТЧЗаданВод.ПунктОтправ Set start)
                this.fПунктОтправ = value;
                // *** Start programmer edit section *** (ТЧЗаданВод.ПунктОтправ Set end)

                // *** End programmer edit section *** (ТЧЗаданВод.ПунктОтправ Set end)
            }
        }
        
        /// <summary>
        /// Расстояние.
        /// </summary>
        // *** Start programmer edit section *** (ТЧЗаданВод.Расстояние CustomAttributes)

        // *** End programmer edit section *** (ТЧЗаданВод.Расстояние CustomAttributes)
        public virtual double Расстояние
        {
            get
            {
                // *** Start programmer edit section *** (ТЧЗаданВод.Расстояние Get start)

                // *** End programmer edit section *** (ТЧЗаданВод.Расстояние Get start)
                double result = this.fРасстояние;
                // *** Start programmer edit section *** (ТЧЗаданВод.Расстояние Get end)

                // *** End programmer edit section *** (ТЧЗаданВод.Расстояние Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧЗаданВод.Расстояние Set start)

                // *** End programmer edit section *** (ТЧЗаданВод.Расстояние Set start)
                this.fРасстояние = value;
                // *** Start programmer edit section *** (ТЧЗаданВод.Расстояние Set end)

                // *** End programmer edit section *** (ТЧЗаданВод.Расстояние Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧЗаданВодE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧЗаданВодE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧЗаданВодE", typeof(IIS.OtdelLogistiki.ТЧЗаданВод));
                }
            }
            
            /// <summary>
            /// "ТЧЗаданВодL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧЗаданВодL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧЗаданВодL", typeof(IIS.OtdelLogistiki.ТЧЗаданВод));
                }
            }
        }
    }
}
