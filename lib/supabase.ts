import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pexzgmkfqeaschixyxno.supabase.co";

const anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBleHpnbWtmcWVhc2NoaXh5eG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyMDE2MjIsImV4cCI6MjAxODc3NzYyMn0.UhBdMiTSBOK8TtEpb6DrkyRsLPg5L5MYDPxp5M_3mB8";

export const supabase = createClient(supabaseUrl, anonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
