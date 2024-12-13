/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckUpInformationDto } from '../models/CheckUpInformationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CheckUpInformationControllerService {
    /**
     * @param patientId
     * @returns CheckUpInformationDto OK
     * @throws ApiError
     */
    public static getall(
        patientId: string,
    ): CancelablePromise<Array<CheckUpInformationDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/checkup-information',
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
    public static save3(
        requestBody: CheckUpInformationDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/checkup-information',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
