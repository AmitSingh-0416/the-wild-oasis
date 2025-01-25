import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xtqutveylrzsxyndjwwm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0cXV0dmV5bHJ6c3h5bmRqd3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3ODk5MTEsImV4cCI6MjA1MTM2NTkxMX0.Kk4k-LzrWnYMU4UMK4JMAT8pNcXhZFIuvRSvj1iVhvc"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
