/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiagnosisInformationDto } from '../models/DiagnosisInformationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DiagnosisInformationControllerService {
    /**
     * @param patientId
     * @returns DiagnosisInformationDto OK
     * @throws ApiError
     */
    public static get2(
        patientId: string,
    ): CancelablePromise<Array<DiagnosisInformationDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/diagonosis-informatiob',
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
    public static save2(
        requestBody: DiagnosisInformationDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/diagonosis-informatiob',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
