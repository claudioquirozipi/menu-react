import { Session } from "@supabase/supabase-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { supabase } from "../../App";

const baseURL = import.meta.env.VITE_REACT_APP_URL_API;
export const instance = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    apikey: import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY,
  },
});

export const useIntaceService = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if (session) {
      const auth = `Bearer ${session.access_token}`;
      instance.defaults.headers.common["Authorization"] = auth;
    }
  }, [session]);
  return {
    session,
  };
};
