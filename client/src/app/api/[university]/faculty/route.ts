const supabase = require('@lib/dbConnect')

const create_faculty = async (req:any, res:any) => {
    const faculty = req.body
    const uni_id = req.query.university
    const { faculty_name } = faculty

    try {
        const { data, error } = await supabase
            .from('faculty')
            .insert([{ faculty_name, uni_id }]);
        if (error) {
            throw error;
        }
        res.status(201).json({ data: data , function_name: 'create_faculty' });
    } catch (error:any) {
        console.error(error);
        res.status(500).json({ error_message: error.message , function_name: 'create_faculty' });
    }
}

export default create_faculty