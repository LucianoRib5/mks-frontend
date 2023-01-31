import * as services from "../services/axios";

export const get = (path: string) => {
    return services.client.get(path);
};