import { createClient } from "@supabase/supabase-js";

const URL = "https://qdipviuobjgmhogxexna.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkaXB2aXVvYmpnbWhvZ3hleG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMzE3MjksImV4cCI6MjA0NTkwNzcyOX0.X8yVRrtpl23IvsVMsMO6dIuMcvoXn1W4blTgVFNZNK0";

export const supabase = createClient(URL, API_KEY);
