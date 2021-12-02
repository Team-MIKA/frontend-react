/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WidgetDTO } from "./WidgetDTO";

export type WorkspaceDTO = {
    id?: string | null;
    title?: string | null;
    widgets?: Array<WidgetDTO> | null;
};
