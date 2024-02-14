"use client";

import * as React from "react";

import Link from "next/link";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="text-md font-medium underline-offset-4 hover:underline">
      <button onClick={handleClick}>Contact</button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            href="https://www.facebook.com/profile.php?id=100094540248529"
            target="_blank"
          >
            Facebook
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="https://twitter.com/xuedao_tw" target="_blank">
            X / Twitter
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="#" target="_blank">
            Telegram
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="https://www.instagram.com/xue_dao_/" target="_blank">
            Instagram
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
