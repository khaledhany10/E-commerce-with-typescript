import type { Route } from "../+types/root";
import CategoriesComp from "../Components/Categories/CategoriesComp";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Categories" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Categories() {
  return (
    <div>
      <CategoriesComp />
    </div>
  )
}
