export type TLoading = "idle" | "pending" | "succeeded" | "failed";
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
export interface IProductState { id: number; title: string; price: number; imageCover: string }[];
export type TGetCategories = { _id: string; name: string; slug: string; image: string}[]

// Typer For Products ID


export interface TProductDetails {
    _id : string,
    title : string,
    description : string,
    quantity : string,
    price : number,
    imageCover : string
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
}[];





