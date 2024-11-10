const supabase = require('@lib/dbConnect')

const create_subject = async (req:any, res:any) => {
    const subject = req.body
    const uni_id = req.query.university
    const { subject_name } = subject

    try {
        const { data, error } = await supabase
            .from('subject')
            .insert([{ subject_name, uni_id }]);
        if (error) {
            throw error;
        }
        res.status(201).json({ data: data, function_name: 'create_subject' });
    } catch (error:any) {
        console.error(error);
        res.status(500).json({ error_message: error.message, function_name: 'create_subject' });
    }
}

export default create_subject