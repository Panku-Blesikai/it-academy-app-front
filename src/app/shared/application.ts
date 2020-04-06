import {Comment} from './comment';

export interface Application {
    id?: string;
    name: string;
    surname: string;
    phone: string;
    email: string;
    education: string;
    freeTimeActivity: string;
    threePartyAgreement: string;
    available14To18: string;
    motivation: string;
    experience: string;
    infoAboutAcademy: string;
    dateTime?: string;
    idHash?: string;
    status: string;
    comments?: Array<Comment>;
}
