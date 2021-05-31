//Redux saga
import {call} from 'redux-saga/effects';

//Services
import axios from 'services/axios';

//Utils
import {transformError} from 'utils/transformError';

//Types
import {AxiosRequestConfig, AxiosResponse} from 'axios';

export function* request<T>(
    config: AxiosRequestConfig,
    useAuthorization = false
): Generator<any, AxiosResponse<T>, any> {
    try {
        return yield call(
            axios.request,
            useAuthorization
                ? {
                      ...config,
                      headers: {
                          ...(config.headers ?? {})
                      }
                  }
                : config
        );
    } catch (error) {
        throw transformError(error);
    }
}
