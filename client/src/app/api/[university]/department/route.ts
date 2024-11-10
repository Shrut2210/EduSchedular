const supabase = require('@lib/dbConnect')

const create_department = async (req:any, res:any) => {
    const department = req.body
    const university_id = req.query.university;
    const { department_name} = department
    try {
        const { data, error } = await supabase
            .from('department')
            .insert([{ university_id, department_name }]);
        if (error) {
            throw error;
        }
        res.status(201).json({ data: data, function_name: 'create_department' });
    } catch (error:any) {
        console.error(error);
        res.status(500).json({ error_message: error.message, function_name: 'create_department' });
    }
}

export default create_department