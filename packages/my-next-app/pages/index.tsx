/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { Thing } from "@antlaht86/mylib";
import { ITeam, isTeam, IPerson, isPerson } from "@antlaht86/types";

export default function Home() {
  const team: ITeam = {
    id: 12,
    teamName: "Foo",
  };

  const person: IPerson = {
    id: 1,
    name: "Baz",
    team,
  };

  console.log("is team? ", isTeam(team));
  console.log("is person? ", isPerson(person));
  return (
    <div sx={{ background: (theme) => theme.colors.primary }}>
      <main sx={{ variant: "main" }}>
        <Container sx={{ variant: "content" }}>
          <Thing />
          <h3>moi</h3>
          <button sx={{ variant: "greenButton" }}>Click me!</button>
        </Container>
      </main>
    </div>
  );
}
