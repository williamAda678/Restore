import { decrement, increment } from "./counterReducer";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/store";

export default function ContactPage() {
  const { data } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <Typography variant="h2">Contact Page</Typography>
      <Typography variant="body1">the data is: {data}</Typography>
      <ButtonGroup>
        <Button color="error" onClick={() => dispatch(decrement(1))}>
          Decrement
        </Button>{" "}
        <Button color="secondary" onClick={() => dispatch(increment(1))}>
          Increment
        </Button>{" "}
        <Button color="primary" onClick={() => dispatch(increment(5))}>
          Increment by 5
        </Button>
      </ButtonGroup>
    </>
  );
}
