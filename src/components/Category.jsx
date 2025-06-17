// MUI Imports
import { Stack } from "@mui/material";
// Constant
import { category } from "../constants/constant-values";

function Category() {
  return (
    <Stack direction={"row"} sx={{overflowX: "auto"}}>
      {category.map((item) => (
        <button key={item.name} className="category-btn" style={{borderRadius: 0}}>
          <span style={{color: "#76323f", marginRight: "15px"}}>{item.icon}</span>
          <span style={{opacity: '1', }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default Category;
