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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
// import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from "./dashboardcomponents/Listitems";
// import Chart from "./dashboardcomponents /chart";
// import Deposits from "./dashboardcomponents /Deposit";
// import Orders from "./dashboardcomponents /Orders";
// import Dashheader from "./dashboard components /Dashheader";
// import Dashheader from "./dashboard components /Dashheader";
import Card from "./dashboardcomponents/card/card1";
import Header from "./Header";
import Datagrid from "./dashboardcomponents/Newdatagrid";

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

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

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

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [orderData, setOrderData] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  React.useEffect(() => {
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
          renderCell: (params) => (
            <a
              href={`/orders/${params.value}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View order details for ${params.value}`}
              style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}
            >
              {params.value}
            </a>
          ),
          
          
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
    };
    setOrderData(data);
  }, []);

  return (
    <div>
      <Header />
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          {/* <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar> */}
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
            <List component="nav">
              {mainListItems}
              {/* <Divider sx={{ my: 1 }} />
            {secondaryListItems} */}
            </List>
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
            <Toolbar />
            <Card />
            <Datagrid data={orderData} title={"Order Details"} />
            {/* <Container>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Card />
                </Paper>
              </Grid>
            </Container> */}

            {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}> */}
            {/* Chart */}
            {/* <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                 
                  <Chart />
                </Paper>
              </Grid> */}
            {/* Recent Deposits */}
            {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid> */}
            {/* Recent Orders */}
            {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container> */}
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}
