/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MedicationDto } from '../models/MedicationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MedicationControllerService {
    /**
     * @param patientId
     * @returns MedicationDto OK
     * @throws ApiError
     */
    public static get1(
        patientId: string,
    ): CancelablePromise<Array<MedicationDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/medication-information',
            query: {
                'patientId': patientId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static save1(
        requestBody: MedicationDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/medication-information',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
