const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const envFile = fs.readFileSync('.env.local', 'utf8');
const env = envFile.split('\n').reduce((acc, line) => {
  const [key, value] = line.split('=');
  if (key && value) acc[key.trim()] = value.trim();
  return acc;
}, {});

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
  const { data: cats } = await supabase.from('categories').select('*');
  console.log("Categories:", cats.map(c => c.name));
  
  const { data: csc } = await supabase.from('category_sub_categories').select('*');
  console.log("CSC Count:", csc.length);
}
main();
