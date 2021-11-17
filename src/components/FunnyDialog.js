import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";

export const FunnyDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-container': {
        alignItems: 'flex-start',
    },
    '& .MuiDialog-paper': {
        borderRadius: 30,
        width: 600,
        maxWidth: '100%'
    },
    '& .MuiDialogActions-spacing': {
        justifyContent: 'center',
        '& button': {
            padding: '6px 30px'
        }
    }
}));
