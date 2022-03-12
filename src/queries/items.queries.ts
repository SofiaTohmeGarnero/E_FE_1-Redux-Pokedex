import {Category, CategoryWithItems} from "../types/category.types";
import {ItemsWithProps} from "../types/item.types";

export const getItemCategories = async (): Promise<Category[]> => {
    const response = await fetch("https://pokeapi.co/api/v2/item-category/");
    const data = await response.json();
    return data.results;
};

export const getItemCategory = async (categoryId: string): Promise<CategoryWithItems> => {
    const response = await fetch(`https://pokeapi.co/api/v2/item-category/${categoryId}`);
    const data = await response.json();
    return data;
};

export const getItemDetalle = async (itemId: string): Promise<ItemsWithProps> => {
    const response = await fetch(`https://pokeapi.co/api/v2/item/${itemId}`);
    const data = await response.json();
    return data;
};