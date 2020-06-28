import { Category } from "./category";

export class Book {
    id: number;
    name: string;
    auther: string;
    category: Category;
    book_description: string;
    universal_product_code: number;
    price: number;
    publisher: string;
}
