import {
  LineStyle as LineStyleIcon,
  Storefront as StorefrontIcon,
} from '@material-ui/icons';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  
  return (
    <Box>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle variant="overline">Dashboard</SidebarTitle>
          <SidebarList>
            <Link to="/" className="link">
              <SidebarListItem
                component="li"
                className={`${SidebarListItemActive}`}
              >
                <ListItemIcon>
                  <SidebarIcon>
                    <LineStyleIcon />
                  </SidebarIcon>
                </ListItemIcon>
                <ListItemText primary="Revenue" />
              </SidebarListItem>
            </Link>
          </SidebarList>
        </SidebarMenu>
        
        <SidebarMenu>
          <SidebarTitle variant="overline">Quick Menu</SidebarTitle>
          <SidebarList>
            <Link to="/products" className="link">
              <SidebarListItem button component="li">
                <ListItemIcon>
                  <SidebarIcon>
                    <StorefrontIcon />
                  </SidebarIcon>
                </ListItemIcon>
                <ListItemText primary="Inventory" />
              </SidebarListItem>
            </Link>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
      </Box>
  );
}

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  padding: 2,
  color: theme.palette.text.primary,
}));

export const SidebarMenu = styled(Box)(() => ({
  marginBottom: 2,
}));

export const SidebarTitle = styled(Typography)(({ theme }) => ({
  fontSize: '13px',
  color: theme.palette.text.secondary,
}));

export const SidebarList = styled(List)(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
}));

export const SidebarListItem = styled(ListItem)(({ theme }) => ({
  padding: 1,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 1,
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));

export const SidebarListItemActive = styled(SidebarListItem)(({ theme }) => ({
  backgroundColor: theme.palette.action.selected,
}));

export const SidebarIcon = styled(Box)(() => ({
  marginRight: 0,
}));