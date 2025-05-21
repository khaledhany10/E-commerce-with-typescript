import type { Route } from "../+types/root";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}
