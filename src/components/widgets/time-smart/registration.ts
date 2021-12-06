import { CategoryDTO } from "../../../services/openapi";

export interface registration {
    category: CategoryDTO;
    startTime: Date;
    endTime: Date;
    orderId: string;
}
