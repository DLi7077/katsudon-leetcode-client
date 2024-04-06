type Path = `/${string}`;

const ROUTES = ["/", "/profile", "/weekly-progress", "/users"] as const;

type ValidRoute = (typeof ROUTES)[number];

interface PageRoute {
  path: ValidRoute;
  element: JSX.Element;
}

interface PageData {
  label: string;
  hue: number;
  component: JSX.Element;
}
