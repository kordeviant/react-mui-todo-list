import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const colorizeButton = (color, text) => styled(Button)(({ theme }) => ({
    backgroundColor: color,
    color: text || '#000',
    borderColor: '#000',
    '&:hover': {
        backgroundColor: color,
        borderColor: '#000',
    }
}));
export const colorizeElem = (Elem, color, text) => styled(Elem)(({ theme }) => ({
    backgroundColor: color,
    color: text || '#000',
    borderColor: '#000',
    '&:hover': {
        backgroundColor: color,
        borderColor: '#000',
    }
}));
