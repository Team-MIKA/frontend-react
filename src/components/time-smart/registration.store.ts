import { atom, SetterOrUpdater } from "recoil";
import { log } from "@helpers/logger";

export const categoriesState = atom({
    key: "categories",
    default: getCategoriesAPICall(),
});

export function getCategoriesAPICall(): string[] {
    return ["Kvalitet", "Fejl", "Møde", "Pause"];
}

export function addCategory(state, newCategory: string) {
    const [categories, setCategories]: [string[], SetterOrUpdater<string[]>] = state;
    if (categories.some((cat) => cat === newCategory)) {
        log("Cannot add category of same name!");
        return;
    }
    new Promise<void>((resolve) => {
        // This 'fakes' the API call
        setTimeout(() => {
            resolve();
        }, 500);
    }).then(() => {
        setCategories([...categories, newCategory]);
        log(newCategory);
    });
}
