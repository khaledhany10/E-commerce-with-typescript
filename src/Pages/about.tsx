import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "AboutPage" },
      { name: "description", content: "Welcome to React Router!" },
    ];
  }


export default function About() {
    return (
        <div>
            <h1>About</h1>
        </div>
    );
}
