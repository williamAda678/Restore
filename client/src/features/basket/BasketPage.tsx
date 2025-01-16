import { Grid2, Typography } from "@mui/material";
import { useFetchBasketQuery } from "./basketApi";
import BasketItem from "./BasketItem";
import OrderSummary from "../../app/shared/components/OrderSummary";

export function BasketPage() {
  const { data, isLoading } = useFetchBasketQuery();
  if (isLoading) return <Typography> Loading Basket...</Typography>;

  if (!data || data.items.length === 0)
    return <Typography variant="h3"> Your Basket is empty</Typography>;
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={8}>
        {data.items.map((item) => (
          <BasketItem item={item} key={item.productId} />
        ))}
      </Grid2>
      <Grid2 size={4}>
        <OrderSummary />
      </Grid2>
    </Grid2>
  );
}
