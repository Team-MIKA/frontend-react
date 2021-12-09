import { atom, SetterOrUpdater } from "recoil";
import { log } from "@lib/logger";

export const categoriesState = atom({
    key: "categories",
    default: getCategoriesAPICall(),
});

export function getCategoriesAPICall(): string[] {
    return ["Quality", "Error", "Meeting", "Pause"];
}

export function addCategory(state: [string[], SetterOrUpdater<string[]>], newCategory: string) {
    const [categories, setCategories] = state;
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
