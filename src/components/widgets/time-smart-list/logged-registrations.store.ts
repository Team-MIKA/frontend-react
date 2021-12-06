import { atom, selector } from "recoil";
import { tableRow, tableRowDisplay } from "@components/widgets/time-smart-list/logged-registrations-interface";
import { registration } from "@components/widgets/time-smart/registration";
import { CreateRegistrationDTO, TimeSmartService } from "../../../services/openapi";

export const registrationsState = atom({
    key: "registrations",
    default: getRegistrations(),
});

export const tableRowState = selector<tableRow[]>({
    key: "registrationsState",
    get: ({ get }) => {
        const registrations = get(registrationsState);
        return tableRowDisplay(registrations);
    },
});

export function getRegistrations(): registration[] {
    return [];
}

export function addRegistration(state, newRegistration: registration) {
    const [registrations, setRegistrations] = state;

    TimeSmartService.postTimeSmart1({
        categoryId: newRegistration.category.id,
        orderId: newRegistration.orderId,
        startTime: newRegistration.startTime,
        endTime: newRegistration.endTime,
    } as CreateRegistrationDTO)
        .then(() => {
            const newRegs = [...registrations, newRegistration];
            setRegistrations(newRegs);
        })
        .catch(() => {});
}
