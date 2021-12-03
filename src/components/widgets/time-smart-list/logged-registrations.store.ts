import { atom, selector } from "recoil";
import { tableRow, tableRowDisplay } from "@components/widgets/time-smart-list/logged-registrations-interface";
import { registration } from "@components/widgets/time-smart/registration";
import { log } from "@helpers/logger";

export const registrationsState = atom({
    key: "registrations",
    default: getCategoriesAPICall(),
});

export const tableRowState = selector<tableRow[]>({
    key: "registrationsState",
    get: ({ get }) => {
        const registrations = get(registrationsState);
        return tableRowDisplay(registrations);
    },
});

export function getCategoriesAPICall(): registration[] {
    return [];
}

export function addRegistration(state, newRegistration) {
    const [registrations, setRegistrations] = state;

    const newRegs = [...registrations, newRegistration];

    setRegistrations(newRegs);
    log(newRegistration);
}
