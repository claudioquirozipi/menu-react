import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createClient } from "@supabase/supabase-js";

import "primereact/resources/themes/vela-purple/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "./App.css";
import { router } from "./shared/routes/root";
import { useIntaceService } from "./shared/services";

const supabaseAnonKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;
const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  const queryClient = new QueryClient();
  const { session } = useIntaceService();

  console.log("session app", session?.access_token);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <h1>hola mundo</h1>
        {/* <h1>{process?.env?.VITE_REACT_APP_SUPABASE_URL}</h1> */}
        {/* <RouterProvider router={router} /> */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
