/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "theme-ui";

export const Thing = () => {
  return (
    <div sx={{ background: theme => theme?.colors.secondary ?? "#895b5b" }}>
      <h3>Hi!!!</h3>
      <button sx={{variant: "greenButton"}}>Click me!</button>
    </div>
  );
};
