/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { Thing } from "@antlaht86/mylib";

export default function Home() {
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
