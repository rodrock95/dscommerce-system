import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findByIdRequest(id: number){

    //BUSCAR UM PEDIDO POR ID PARA CONFIRMATION
    const config: AxiosRequestConfig = {
        url: `/orders/${id}`,
        withCredentials: true
    }
    return requestBackend(config)
}