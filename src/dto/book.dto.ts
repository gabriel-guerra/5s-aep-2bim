import { DateOnlyDataType } from "sequelize";

export class BookDTO{
    isbn: string;
    title: string;
    author: string;
    genre: string;
    pages: number;
    isAvailable: boolean;
}