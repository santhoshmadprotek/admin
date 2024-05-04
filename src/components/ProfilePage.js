import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
// import MuiAppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import Badge from '@mui/material/Badge';
import Link from "@mui/material/Link";
// import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from "./dashboardcomponents/Listitems";
// import Datagrid from "./dashboardcomponents /Newdatagrid";
import { useEffect } from "react";
import Admin from "./sidebarcomponent/adminprofile";
import  ProfileDetailsPage from "./sidebarcomponent/profile";
import Button from '@mui/material/Button';
import Header from "./Header";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://madprotek.com/">
        madprotek
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ProfilePage() {
  const [open, setOpen] = React.useState(true);
  const [orderData, setOrderData] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const data = {
      columns: [
        {
          field: "id",
          hide: true,
        },
        {
          field: "order_id",
          headerName: "Booking Id",
          width: 110,
        },
        {
          field: "customer_id",
          hide: true,
        },
        {
          field: "customer_name",
          headerName: "Customer Name",
          width: 180,
          editable: false,
        },
        {
          field: "customer_mobile",
          headerName: "Customer Mobile",
          width: 120,
          editable: false,
        },
        {
          field: "shifting_type",
          headerName: "Shifting Type",
          width: 150,
          editable: false,
        },
        {
          field: "status",
          headerName: "Status",
          width: 140,
          editable: false,
        },
        {
          field: "shifting_date",
          headerName: "Shifting Date",
          width: 140,
          editable: false,
        },
        {
          field: "estimated_price",
          headerName: "Estimated Price",
          width: 140,
          editable: false,
        },
      ],
      rows: [
        {
          order_id: 11111111,
          id: 1,
          customer_id: 123,
          customer_name: "Aswin",
          customer_mobile: "1234567890",
          shifting_type: "House shifting",
          status: "Cancelled",
          shifting_date: "2024-04-12T17:46:02Z",
          estimated_price: 10000,
        },
        {
          order_id: 11122234,
          id: 2,
          customer_id: 123,
          customer_name: "Santhosh",
          customer_mobile: "9876543210",
          shifting_type: "House shifting",
          status: "In progress",
          shifting_date: "2024-04-12T17:46:02Z",
          estimated_price: 10000,
        },
        {
          order_id: 11111111,
          id: 3,
          customer_id: 123,
          customer_name: "Aswin",
          customer_mobile: "1234567890",
          shifting_type: "House shifting",
          status: "New",
          shifting_date: "2024-04-12T17:46:02Z",
          estimated_price: 10000,
        },
        {
          order_id: 11122234,
          id: 4,
          customer_id: 123,
          customer_name: "Santhosh",
          customer_mobile: "9876543210",
          shifting_type: "Vehicle shifting",
          status: "Completed",
          shifting_date: "2024-04-12T17:46:02Z",
          estimated_price: 10000,
        },
        {
          order_id: 11111111,
          id: 5,
          customer_id: 123,
          customer_name: "Aswin",
          customer_mobile: "1234567890",
          shifting_type: "House shifting",
          status: "Cancelled",
          shifting_date: "2024-04-12T17:46:02Z",
          estimated_price: 10000,
        },
        {
          order_id: 11122234,
          id: 6,
          customer_id: 123,
          customer_name: "Santhosh",
          customer_mobile: "9876543210",
          shifting_type: "House shifting",
          status: "In progress",
          shifting_date: "2024-04-12T17:46:02Z",
          estimated_price: 10000,
        },
        {
          order_id: 11111111,
          id: 7,
          customer_id: 123,
          customer_name: "Aswin",
          customer_mobile: "1234567890",
          shifting_type: "House shifting",
          status: "New",
          shifting_date: "2024-04-12T17:46:02Z",
          estimated_price: 10000,
        },
        {
          order_id: 11122234,
          id: 8,
          customer_id: 123,
          customer_name: "Santhosh",
          customer_mobile: "9876543210",
          shifting_type: "Vehicle shifting",
          status: "Completed",
          shifting_date: "2024-04-12T17:46:02Z",
          estimated_price: 10000,
        },
        {
          order_id: 11111111,
          id: 9,
          customer_id: 123,
          customer_name: "Aswin",
          customer_mobile: "1234567890",
          shifting_type: "House shifting",
          status: "Cancelled",
          shifting_date: "2024-04-12T17:46:02Z",
          estimated_price: 10000,
        },
        {
          order_id: 11122234,
          id: 10,
          customer_id: 123,
          customer_name: "Santhosh",
          customer_mobile: "9876543210",
          shifting_type: "House shifting",
          status: "In progress",
          shifting_date: "2024-04-12T17:46:02Z",
          estimated_price: 10000,
        },
        {
          order_id: 11111111,
          id: 11,
          customer_id: 123,
          customer_name: "Aswin",
          customer_mobile: "1234567890",
          shifting_type: "House shifting",
          status: "New",
          shifting_date: "2024-04-12T17:46:02Z",
          estimated_price: 10000,
        },
        {
          order_id: 11122234,
          id: 12,
          customer_id: 123,
          customer_name: "Santhosh",
          customer_mobile: "9876543210",
          shifting_type: "Vehicle shifting",
          status: "Completed",
          shifting_date: "2024-04-12T17:46:02Z",
          estimated_price: 10000,
        },
      ],
      // initialState: {
      //   columns: {
      //     columnVisibilityModel: {
      //       id: false,
      //     },
      //   },
      // },
      // experimentalFeatures: {
      //   ariaV7: true,
      // },
    };
    setOrderData(data);
  }, []);

  return (
    <div>
      <Header />


      

    
      <ThemeProvider theme={defaultTheme}>
      
      {/* <Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button> */}
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">{mainListItems}</List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Admin/>
            < ProfileDetailsPage/>
            {/* <Datagrid data={orderData} title={"Orders"} /> */}
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}
