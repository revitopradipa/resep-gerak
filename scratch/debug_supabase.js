const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log('Testing Supabase Connection...');
  const { data, error } = await supabase
    .from('articles')
    .select(`
      id,
      title,
      slug,
      short_description,
      illustration_image_url,
      author_name,
      created_at,
      sub_categories ( name )
    `)
    .eq('is_published', true)
    .limit(6);
    
  console.log('--- Query with sub_categories ---');
  console.log('Data:', data);
  if (error) console.error('Error:', JSON.stringify(error, null, 2));

  console.log('\n--- Query without sub_categories ---');
  const result2 = await supabase
    .from('articles')
    .select(`id, title, is_published, created_by`);
  console.log('Data (all articles):', result2.data);
  if (result2.error) console.error('Error (all articles):', JSON.stringify(result2.error, null, 2));
}

main();
