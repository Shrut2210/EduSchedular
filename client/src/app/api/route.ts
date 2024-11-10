const supabase = require('@lib/dbConnect')

const create_university = async (req:any, res:any) => {
    const university = req.body;
    const { university_name } = university

    try {
        const { data, error } = await supabase
            .from('university')
            .insert({
                university_name,
            })

        if (error) {
            throw error
        }

        res.status(201).json({ data: data ,function_name: 'create_university' })
    } catch (error:any) {
        res.status(500).json({ error_message: error.message, function_name: 'create_university' })
    }
}

export default create_university