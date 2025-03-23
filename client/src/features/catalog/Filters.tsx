import { Box, Button, Paper, Typography } from "@mui/material";
import { useFetchFiltersQuery } from "./catalogApi";
import Search from "./Search";
import RadioButtonGroup from "../../app/shared/components/RadioButtonGroup";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { resetParams, setBrands, setOrderBy, setType } from "./CatalogSlice";
import CheckboxButtons from "../../app/shared/components/CheckboxButtons";

const sortOptions = [
  { value: "name", label: "Alphabetical" },
  { value: "priceDesc", label: "Price: High to low" },
  { value: "price", label: "Price: Low to high" },
];
export default function Filters() {
  const { data } = useFetchFiltersQuery();
  const { orderBy, types, brands } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  if (!data?.brands || !data.types) return <Typography>Loading...</Typography>;

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Paper>
        <Search />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <RadioButtonGroup
          selectedValue={orderBy}
          options={sortOptions}
          onChange={(e) => dispatch(setOrderBy(e.target.value))}
        />
      </Paper>
      <CheckboxButtons
        items={data.brands}
        checked={brands}
        onchange={(items: string[]) => dispatch(setBrands(items))}
      />
      <Paper sx={{ p: 3 }}>
        <CheckboxButtons
          items={data.types}
          checked={types}
          onchange={(items: string[]) => dispatch(setType(items))}
        />
      </Paper>

      <Button
        onClick={() => {
          dispatch(resetParams());
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
      >
        Reset Filters
      </Button>
    </Box>
  );
}
