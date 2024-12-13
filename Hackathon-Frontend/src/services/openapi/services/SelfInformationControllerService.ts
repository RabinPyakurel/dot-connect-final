/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SelfInformationDto } from '../models/SelfInformationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SelfInformationControllerService {
    /**
     * @param citizenshipNumber
     * @returns any OK
     * @throws ApiError
     */
    public static get3(
        citizenshipNumber: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/self-information',
            query: {
                'citizenshipNumber': citizenshipNumber,
            },
        });
    }
    /**
     * @returns SelfInformationDto OK
     * @throws ApiError
     */
    public static test(): CancelablePromise<SelfInformationDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/self-information/test',
        });
    }
}
