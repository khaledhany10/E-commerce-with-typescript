import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rigester" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function rigester() {
  return (
    <div>
      <h1>Rigester</h1>
    </div>
  )
}
