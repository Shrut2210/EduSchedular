const  createClient  =  require('@supabase/supabase-js')

const supabase = createClient(
  process.env.SUPABASEURL || '',
  process.env.SUPABASEKEY || ''
)

export default supabase