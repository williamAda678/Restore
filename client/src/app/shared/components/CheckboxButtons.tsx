import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
  items: string[];
  checked: string[];
  onchange: (items: string[]) => void;
};

export default function CheckboxButtons({ items, checked, onchange }: Props) {
  const [checkedItems, setCheckedItem] = useState(checked);

  useEffect(() => {
    setCheckedItem(checked);
  }, [checked]);

  const handleToggle = (value: string) => {
    const updatedChecked = checkedItems?.includes(value)
      ? checkedItems.filter((item) => item !== value)
      : [...checkedItems, value];

    setCheckedItem(updatedChecked);
    onchange(updatedChecked);
  };
  return (
    <FormGroup sx={{ p: 3 }}>
      {items.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              checked={checkedItems.includes(item)}
              onClick={() => handleToggle(item)}
              color="secondary"
              sx={{ py: 0.7, fontSize: 40 }}
            />
          }
          label={item}
        />
      ))}
    </FormGroup>
  );
}
