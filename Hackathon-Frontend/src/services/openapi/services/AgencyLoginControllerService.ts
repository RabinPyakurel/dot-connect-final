/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgencyLoginDto } from '../models/AgencyLoginDto';
import type { ResponseResultString } from '../models/ResponseResultString';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AgencyLoginControllerService {
    /**
     * @param requestBody
     * @returns ResponseResultString OK
     * @throws ApiError
     */
    public static login(
        requestBody: AgencyLoginDto,
    ): CancelablePromise<ResponseResultString> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/agency-login/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
