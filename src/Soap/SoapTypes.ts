
/**
 * Интерфейс Аутентификации на сервере
 * Обязательно к заполнению одна из групп
 */
 export interface ITicketAuth{
    /**
     * @optional Имя пользователя
     * @group1
     */
    UserLogin?:string;    
     /**
     * @optional Идентификатор ссесии
     * @group2
     */
    SessionID?:string;
     /**
     * @optional пароль
     * @group1
     */
    Password?:string;
}

/**
 * Набор логинов конечных пользователей
 */
 export interface ICustomers{
    /**
  * @optional 
  * @ZeroOrMore
  */
   CustomerUserLogin?:string[];
}

/**
 * Объединенный интерфейс для авторизации
 */
 export interface IAuth extends ITicketAuth, ICustomers{}

 /**
 * @interface очередей в заявке
 */
export interface ITQueue{
    /**
        * Очередь
        */
     Queue :string;
     /**
      * Идентификатор очереди
      */
     QueueID :number;
   }

/**
* @interface заголовка заявки
*/
export interface ITTitle{
    /**
    * Заголовок заявки
    */
     Title :string;
}

/**
 * @interface Идентификации зачявки
 */
 export interface ITNumberId{
    /**
     * Идентификатор заявки
     */
     TicketID :number;
     /**
      * Номер заявки
      */
     TicketNumber :number;
}

/**
 * @interface статуса заявки
 */
 export interface ITState{
    /**
    * Статус
    */
     State :string;
     /**
      * Идентификатор статуса
      */
     StateID :number;
     /**
      * Тип статуса
      */
     StateType :string;
}

/**
 * @interface приоритета заявки
 */
 export interface ITPriority{
    /**
     * Приоритет
     */
     Priority :string;
     /**
      * Идентификатор приоритета
      */
     PriorityID :number;
}

/**
 * @interface блокирования заявки
 */
export interface ITLock{
     /**
     * Состояние блокировки
     */
      Lock :string;
      /**
       * Идентификатор блокировки
       */
      LockID  :number;
}

/**
 * @interface заявителя
 */
export interface ITCustomer{
    /**
     * Идетификатор клиента
     */
     CustomerID :string;
     /**
      * Идентификатор пользователя клиента
      */
     CustomerUserID :string;
}

/**
 * @interface владельца
 */
export interface ITOwner{
    /**
     * Владелец
     */
     Owner :string;
     /**
      * Идентификатор владельца
      */
     OwnerID  :number;
}

/**
 * @interface типа заявки
 */
export interface ITType{
    /**
     * Тип заявки
     */
     Type :string;
     /**
      * Идентификатор типа заявки
      */
     TypeID :number;
}

/**
 * @interface соглашения о сервисе заявки
 */
export interface ITSLA{
     /**
     * Идетификатор SLA
     */
      SLAID :string;
      /**
     * наименование SLA
     */
       SLA :string;
}

/**
 * @interface сервиса заявки
 */
export interface ITService{
     /**
     * Сервис обслуживания
     */
      Service :string;
       /**
     * Сервис обслуживания
     */
    ServiceID? :string;
}

/**
 * @interface ответсвенного за заявку
 */
export interface ITResponsible{
     /**
     * Ответсвенный
     */
      Responsible :string;
      /**
       * Идентификатор ответсвенного
       */
      ResponsibleID :number;
}

/**
 * @interface изменения заявки
 */
export interface ITChange{
    /**
     * Идентификатор кем изменена
     */
     ChangeBy:number;
     /**
      * Дата изменения
      */
     Changed :string;
}

/**
 * @interface создания заявки
 */
export interface ITCreated{
    /**
     * Кем создана
     */
     CreateBy :string;
     /**
      * Дата создания
      */
     Created :string;
}

/**
 * @interface времени заявки
 */
export interface ITTimes{
     /**
     * Время экскалации ответа
     */
      EscalationResponseTime :number;
      /**
       * Время экскалации решения
       */
      EscalationSolutionTime :number;
      /**
       * Время экскалации
       */
      EscalationTime :number;
      /**
       * Время до экскалации обновления
       */
      EscalationUpdateTime  :number;
       /**
     * Время простоя
     */
    RealTillTimeNotUsed :number;
    /**
     * Единица измерения времени
     */
     TimeUnit :number;
      /**
     * Время разблокирования
     */
    UnlockTimeout :number;
    /**
     * Время до
     */
    UntilTime :number;

}

/**
 * @interface Заявки
 */
export interface ITicket extends 
        ITQueue, ITTitle, ITNumberId, ITState,
        ITPriority, ITLock, ITCustomer, ITOwner, ITType,
        ITSLA, ITService, ITResponsible, ITChange, ITCreated,
        ITTimes
{
    /**
     * TimeStamp  возраста заявки
     */
    Age:number;
    /**
     * Состояние архивирования
     */
    ArchiveFlag:string;
    /**
     * Набор заметок принадлежащих текущей заявке
     */
    Article?:IArticle[];            
    /**
     * Набор динамических полей
     */
    DynamicField? :IDynamicField[];   
    /**
     * Идентификатор группы
     */
    GroupID  :number;
    /**
     * Текст локализированного статуса
     */
    StateLocText?:string;
}

/**
 * @interface канала связи реплики
 */
export interface IAComunication{
     CommunicationChannel:string;
     /**
     * Идентификатор канала связи
     */
      CommunicationChannelID:number;
}

/**
 * @interface письма реплики
 */
export interface IAMail{
     /**
     * 
     */
      Bcc:string;
      /**
       * Тело сообщения
       */
      Body:string;
      /**
       * Копия
       */
      Cc:string;
      /**
     * от
     */
    From:string;
    /**
     * Отвечать (кому)
     */
    InReplyTo:string;
    /**
     * Отвечать по 
     */
     ReplyTo:string;
      /**
     * Тема заявки
     */
    Subject:string;
     /**
     * Кому
     */
      To:string;
}

/**
 * @interface отправителя реплики
 */
export interface IASender{
    /**
     * Тип отправителя
     */
     SenderType:string;
     /**
      * Идентификатор типа отправителя
      */
     SenderTypeID:string;
}

/**
 * @interface содержимого реплики
 */
export interface IAContent{
     /**
     * Тип представляемой информации
     */
      MimeType:string;
      /**
     * Тип кодировки букв
     */
    Charset:string;   
    /**
     * Кодировка содиржимого
     */
    ContentCharset:string;
    /**
     * Тип содержимого
     */
    ContentType:string;
}

/**
 * @interface времени реплики
 */
export interface IATime{
     /**
     * Тип времени
     */
      TimeUnit:number;
}

/**
 * @interface сообщений
 */
 export interface IArticle extends IAComunication, IAMail, IASender, IAContent, IATime{
    /**
     * Идентификатор сообщения
     */
    ArticleID:number;
    /**
     * порядковый номер сообщения
     */
    ArticleNumber:number;
    /**
     * Тело реплики как вложение
     */    
    Attachment?:IArticleAttachment[]|IArticleAttachment;
   
    /**
     * Идентификатор изменившего
     */
    ChangeBy:number;
    /**
     * Время изменения
     */
    ChangeTime:string;
    /**
     * Идентификатор создавшего
     */
    CreateBy:number;
    /**
     * Время создания
     */
    CreateTime:string;    
    /**
     * Метка времени когда письмо пришло
     */
    IncomingTime:number;
    /**
     * Является видимым для пользователя
     */
    IsVisibleForCustomer:number;
    /**
     * Идентификатор сообщения
     */
    MessageID:string;   
    /**
     * Ссылки
     */
    References:string;          
    /**
     * Идентификатор заявки
     */
    TicketID:number;
   
   
}

/**
 * Динамическое поле
 */
export interface IDynamicField{
    /**
     * Наименование динамического поля
     */
    Name :string;
    /**
     * Значение динамического поля
     */
    Value :string;
}

/**
 * @interface IArticleAttachment предназначен для работы с прикрепленными файлами в формате base64string
 */
export interface IArticleAttachment{
    /**
     * base64 строка вложения
     */
    Content:string;
    /**
     * 
     */
    ContentAlternative?:string;
    /**
     * 
     */
    ContentID?:string;
    /**
     * тип прикрепленного контента
     * @example 
     * "text/html; charset=\"utf-8\"",
     * "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
     */
    ContentType:string;
    /**
     * положение в реплике
     * @example
     * inline - непосредственное тело реплики
     * attachment - прикрепленный файл
     */
    Disposition:string;
    /**
     * Идентификатор файла
     */
    FileID:number;
    /**
     * Наименование файла
     */
    Filename:string;
    /**
     * Размер данных файла
     */
    FilesizeRaw:number;
}
 
/**
 * @interface создаваемой заявки
 */
export interface ITicketCreate extends 
        ITTitle, ITQueue, ITLock, ITType, ITService, ITState,
        ITSLA, ITPriority, ITOwner, ITResponsible, ITCustomer
{
   /**
    * Время ожидания
    */
    PendingTime?:IPendingTime;     
    /**
     *  Пользоваетль от кого подается заявка
     */  
     CustomerUser:string;    
}

/**
 * @CHSUVladimir
 * @interface времени ожидания
 */
export interface IPendingTime{
    /**
     * дата до год
     */
    Year?:number;
    /**
     * дата до месяц
     */
    Month?:number;
    /**
     * дата до день
     */
    Day?:number;
    /**
     * дата до часы
     */
    Hour?:number;
    /**
     * дата до минуты
     */
    Minute?:number;
    /**
     * колличество секунд
     */
    Diff?:number;
}

/**
 * @interface Добавляемой (новой) реплики
 */
export interface IAddArticle extends IAComunication, IAMail, IASender, IAContent, IATime{
    /**
     * доступен ли к просмотру для пользователя
     */
    IsVisibleForCustomer:number;
    /**
     * автоматический ответ
     */
    AutoResponseType?:string;
    /**
     * тип истории
     */
    HistoryType?:string;
    /**
     * коментарий к истории
     */
    HistoryComment?:string;
    /**
     * необходимость просмотра агентом
     */
    NoAgentNotify?:number;
    /**
     * принудительно включенные пользователи
     */
    ForceNotificationToUserID?:number[];
    /**
     * Исключенные пользователи для доступа
     */
    ExcludeNotificationToUserID?:number[];
    /**
     * Исключенные пользователи (идентификаторы)
     */
    ExcludeMuteNotificationToUserID?:number[];
}

/**
 * @interface ITCResponse Отдаваемых данных из OTRS
 */
 export interface ITCResponse{
    /**
     * Идентификатор реплики
     */
    ArticleID: number;
    /**
     * Идентификатор заявки
     */
    TicketID: number;
    /**
     * Номер заявки
     */
    TicketNumber: number;
}