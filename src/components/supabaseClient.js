import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yhflvbcrcsusrhyinkad.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZmx2YmNyY3N1c3JoeWlua2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMzk0ODksImV4cCI6MjAxNDYxNTQ4OX0.tuL8iyn1HaodGcJuniAZfqVmoc6e0kZmaV-83nc8Ntw'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
