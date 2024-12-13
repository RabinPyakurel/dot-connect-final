/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityLogDto } from './ActivityLogDto';
import type { CheckUpInformationDto } from './CheckUpInformationDto';
import type { DiagnosisInformationDto } from './DiagnosisInformationDto';
import type { MedicationDto } from './MedicationDto';
export type SelfInformationDto = {
    patientId?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    gender?: string;
    phoneNumber?: string;
    citizenshipNumber?: string;
    bloodGroup?: string;
    checkups?: Array<CheckUpInformationDto>;
    diagnoses?: Array<DiagnosisInformationDto>;
    medications?: Array<MedicationDto>;
    activityLogs?: Array<ActivityLogDto>;
};

