const supabase = require('@lib/dbConnect')

const create_branch = async (req:any, res:any) => {
    const branch = req.body
    const { branch_name, dept_id } = branch

    try {
        const { data, error } = await supabase
            .from('branch')
            .insert([{ branch_name, dept_id }])
            
        if (error) {
            console.error(error)
            return res.status(500).json({ error_message: error.message, function_name: 'create_branch' })
        }
        
        res.status(201).json({ data: data, function_name: 'create_branch'})
        
    } catch (error:any) {
        console.error(error)
        res.status(500).json({ error_message: error.message, function_name: 'create_branch' })
    }
}

export default create_branch;