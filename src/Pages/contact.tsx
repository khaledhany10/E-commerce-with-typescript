import type { Route } from "../+types/root";



export function meta({}: Route.MetaArgs) {
    return [
      { title: "ContactPage" },
      { name: "description", content: "Welcome to React Router!" },
    ];
  }
export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
}
