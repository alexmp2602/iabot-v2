import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aedgswisrqwxgxokgsst.supabase.co'; // URL del proyecto
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZGdzd2lzcnF3eGd4b2tnc3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1OTE0MzYsImV4cCI6MjAyMjE2NzQzNn0.8DnZhCTLGglrBBvTejcqcmmE-53x2CaErBg7ch0gRaU'; // Clave API pública de Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase; 
