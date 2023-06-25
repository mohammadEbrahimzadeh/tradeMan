import Home from "./Pages/Home/Home";
import Exchange from "./Pages/Exchange/Exchange";
import CurrencyExchange from "./Pages/Exchange/Components/CurrencyExchange/CurrencyExchange";
import LOGIN from "./Pages/LOGIN/LOGIN";
import NotFound from "./Pages/NotFound/NotFound";
import AboutUs from "./Pages/AboutUs/AboutUs";
import TermsAndRules from "./Pages/TermsAndRules/TermsAndRules";
import Privacy from "./Pages/Privacy/Privacy";
const Routes = [
  { path: "/tradeMan", element: <Home /> },
  { path: "/home", element: <Home /> },

  {
    path: "/exchange/*",
    element: <Exchange />,
    children: [
      {
        path: "",
        element: <CurrencyExchange />,
      },
      {
        path: "currencyExchange",
        element: <CurrencyExchange />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "/login", element: <LOGIN /> },
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/termsandrules", element: <TermsAndRules /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "*", element: <NotFound /> },
];
export default Routes;
