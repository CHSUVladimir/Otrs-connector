export type {
  ITicketAuth,
  ICustomers,
  IAuth,
  ITQueue,
  ITTitle,
  ITNumberId,
  ITState,
  ITPriority,
  ITLock,
  ITCustomer,
  ITOwner,
  ITType,
  ITSLA,
  ITService,
  ITResponsible,
  ITChange,
  ITCreated,
  ITTimes,
  ITicket,
  IAComunication,
  IAMail,
  IASender,
  IAContent,
  IATime,
  IArticle,
  IDynamicField,
  IArticleAttachment,
  ITicketCreate,
  IPendingTime,
  IAddArticle,
  ITCResponse,
} from './Soap/Index'
export type {
  ISession,
  ITSTicket,
  ITSQueues,
  ITSTypes,
  ITSState,
  ITSPriorities,
  ITSServices,
  ITSLocks,
  ITSOwner,
  ITSResponse,
  ITSCustomer,
  ITSCreated,
  IDynamicFieldTS,
  ITicketFlag,
  ITSMail,
  ITSSearchConditions,
  ITSArticleCreate,
  ITSTicketCreate,
  ITSTicketLastChange,
  ITSTicketChange,
  ITSTicketClose,
  ITSTicketPending,
  ITSTicketEscalation,
  ITSAOS,
  ITSBase,
  Error,
  ITicketSearchResponse,
  ITGTicket,
  ITGDynamicFields,
  ITGExtended,
  ITGArticles,
  ITGAttachments,
  ITGBase,
  ITicketCreateBase,
  IOTRSAnswer,
  IOTRSBodyAnswer,
  IOTRSSessionAnswer,
  ITicketGetResponse,
  ITicketCreateResponse,
  ITicketUpdateResponse,
} from './Soap/SoapTypes'

export { XMLParser } from 'fast-xml-parser'
export { default as Connector } from './OTRS/OTRSConnector'
export { default as Soap } from './Soap/SoapSerialitor'
export { default as OTRSSession } from './OTRS/OTRSSession'
import { default as OTRSSession } from './OTRS/OTRSSession'
export { default as OTRSTicketSearch } from './OTRS/TicketSearch'
import { default as OTRSTicketSearch } from './OTRS/TicketSearch'
export { default as OTRSTicketGet } from './OTRS/TicketGet'
import { default as OTRSTicketGet } from './OTRS/TicketGet'
export { default as OTRSTicketCreate } from './OTRS/TicketCreate'
import { default as OTRSTicketCreate } from './OTRS/TicketCreate'
export { default as OTRSTicketUpdate } from './OTRS/TicketUpdate'
import { default as OTRSTicketUpdate } from './OTRS/TicketUpdate'

Object.defineProperties(global, { OTRSSession: { value: OTRSSession } })
Object.defineProperties(global, { OTRSTicketSearch: { value: OTRSTicketSearch } })
Object.defineProperties(global, { OTRSTicketGet: { value: OTRSTicketGet } })
Object.defineProperties(global, { OTRSTicketCreate: { value: OTRSTicketCreate } })
Object.defineProperties(global, { OTRSTicketUpdate: { value: OTRSTicketUpdate } })
