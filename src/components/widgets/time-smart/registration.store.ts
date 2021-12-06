import { atom, SetterOrUpdater } from "recoil";
import { log } from "@helpers/logger";
import { CategoryDTO } from "../../../services/openapi";

export const categoriesState = atom({
    key: "categories",
    default: getCategoriesAPICall(),
});

export function getCategoriesAPICall(): CategoryDTO[] {
    return [] as CategoryDTO[];
}

export function addCategory(state: [CategoryDTO[], SetterOrUpdater<CategoryDTO[]>], newCategory: string) {
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
        setCategories([...categories, { text: newCategory }]);
        log(newCategory);
    });
}
