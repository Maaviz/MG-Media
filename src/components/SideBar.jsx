import { Stack } from "@mui/material";

import { categories } from "./utils/constants.js"


const SideBar = ({selectedCategory,setSelectedCategory}) => (
    <Stack direction="row" sx={{
        overflow: "auto",
        height: { sx: 0, md: '95%' },
        flexDirection: { md: "column" }
    }}>
        {
            categories.map((categories) => (
                <button className="category-btn"
                    onClick={() => setSelectedCategory(categories.name)}
                    key={categories.name}
                    style={{
                    background: categories.name === selectedCategory && "#FC1503", color: "white"
                }}>
                    <span style={{
                        color: categories.name === selectedCategory ? "white" : "red", marginRight: '15px'
                    }}>{categories.icon}</span>
                    <span style={{ opacity: categories.name === selectedCategory ? '1' : '0.7' }}>{categories.name}</span>
                </button>
            ))
        }
    </Stack>
);

export default SideBar;
