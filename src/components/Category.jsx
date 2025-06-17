// MUI Imports
import { Stack } from "@mui/material";
// Constant
import { category } from "../constants/constant-values";

function Category({ handleSelectedCategory, selectedCategory }) {
  return (
    <Stack direction={"row"} sx={{ overflowX: "auto" }}>
      {category.map((item) => {
        console.log(item.name);
        return (
          <button
            key={item.name}
            className="category-btn"
            style={{
              borderRadius: 0,
              background: item.name === selectedCategory && "#76323f",
              color: item.name === selectedCategory && "#fff",
            }}
            onClick={() => handleSelectedCategory(item.name)}
          >
            <span
              style={{
                color: item.name === selectedCategory ? "#fff" : "#76323f",
                marginRight: "15px",
              }}
            >
              {item.icon}
            </span>
            <span
              style={{
                opacity: "1",
                color: item.name === selectedCategory ? "#fff" : "#76323f",
              }}
            >
              {item.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Category;
