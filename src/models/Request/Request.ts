import { types, flow, Instance } from 'mobx-state-tree';
import axios, { AxiosRequestConfig, CancelTokenSource, AxiosError, AxiosResponse } from 'axios';

enum ERequestState {
    Pending = 'pending',
    Done = 'done',
    Error = 'error'
}

/**
 * This is an utility model that responsible for:
 *
 * - fetching data
 * - showing errors
 * - keeping a request state
 * - adding auth details to every request
 * - handling auth errors
 */
const Request = types
    .model('Request', {
        state: types.maybeNull(types.enumeration(Object.values(ERequestState))),
        /** the default value depends on requirements */
        showError: false,
        isCancellable: true
    })
    .actions((self) => {
        let cancel: CancelTokenSource | null = null;

        const actions = {
            send: flow(function* send<T, R extends { data: unknown; config: AxiosRequestConfig }>(
                action: (options: T) => Promise<R>,
                options: T
            ) {
                try {
                    self.state = ERequestState.Pending;

                    if (self.isCancellable) {
                        if (cancel) {
                            actions.cancel(
                                'Request cancelled: the same api call is being called multiple times subsequently'
                            );
                        }
                        cancel = axios.CancelToken.source();
                    }

                    const response: AxiosResponse<unknown> = yield action({
                        ...options,
                    });

                    console.assert(!!response, 'Got empty response');
                    self.state = ERequestState.Done;

                    return response.data;
                } catch (error) {
                    console.error(error instanceof Error ? error.message : error);
                    self.state = ERequestState.Error;

                    /** handle errors */
                    if (axios.isAxiosError(error)) {
                        actions.handleApiError(error);
                    }
                } finally {
                    if (cancel) {
                        cancel = null;
                    }
                }
            }),
            /**
             * To stop requests on route change for example
             */
            cancel(message?: string) {
                if (cancel) {
                    cancel.cancel(message || 'Request cancelled');
                }
            },
            handleApiError(error: AxiosError) {
                if (self.showError) {
                    console.error(error)
                }
            }
        };
        return actions;
    })
    .views((self) => ({
        get isPending() {
            return self.state === ERequestState.Pending;
        },
        get isDone() {
            return self.state === ERequestState.Done;
        },
        get isError() {
            return self.state === ERequestState.Error;
        },
        get isNotSend() {
            return self.state === null;
        },
        get isNotComplete() {
            return [ERequestState.Pending, null].includes(self.state);
        }
    }));

export { Request };
export interface IRequestModel extends Instance<typeof Request> { }
