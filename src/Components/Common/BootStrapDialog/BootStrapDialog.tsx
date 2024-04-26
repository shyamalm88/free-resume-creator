import React from "react";
import {
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { styled } from "@mui/material/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const Content = ({
  divider = true,
  children,
}: {
  divider?: boolean;
  children: React.ReactNode;
}) => <DialogContent dividers={divider}>{children}</DialogContent>;
export const Footer = ({ children }: { children: React.ReactNode }) => (
  <DialogActions>{children}</DialogActions>
);

const BootStrapDialog = ({
  open,
  setOpen,
  title,
  children,
}: {
  open: boolean;
  setOpen: Function;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <BootstrapDialog
      onClose={() => setOpen(false)}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => setOpen(false)}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      {children}
    </BootstrapDialog>
  );
};

BootStrapDialog.Content = Content;
BootStrapDialog.Footer = Footer;

export default BootStrapDialog;
