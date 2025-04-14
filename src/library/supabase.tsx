import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ngphpqmwoglidgfertqv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ncGhwcW13b2dsaWRnZmVydHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1OTgzNTgsImV4cCI6MjA2MDE3NDM1OH0.yg8m76qPoPFdDTHKfNofzEzmxehTTSNKBlQ_QWpGcz4";

export const supabase = createClient(supabaseUrl, supabaseKey);
