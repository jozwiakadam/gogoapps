//Types
import {AxiosError} from 'axios';
import {Errors} from 'store/types';

export const transformError = (
    err: AxiosError
): Error | Errors.API<Record<string, unknown>> => {
    if (!err.response?.data) {
        return err;
    }

    return {
        code: err.response?.data.code,
        message: err.response?.data.message,
    };
};
