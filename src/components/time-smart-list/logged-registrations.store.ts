import { atom, selector } from "recoil";
import { tableRow, tableRowDisplay } from "@components/time-smart-list/logged-registrations-interface";
import { registration } from "@components/time-smart/registration";
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
    return [{ category: "hej", startTime: new Date(0), endTime: new Date(0), orderId: "5" }];
}

export function addRegistration(state, newRegistration) {
    const [registrations, setRegistrations] = state;

    const newRegs = [...registrations, newRegistration];
    console.log(newRegs);

    setRegistrations(newRegs);
    log(newRegistration);
}