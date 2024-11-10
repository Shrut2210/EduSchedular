const supabase = require('@lib/dbConnect')

const create_semester = async (req:any, res:any) => {
    const semester = req.body
    const { sem_no, class_id, subject_id, faculty_id } = semester

    try {
        const { data, error } = await supabase
            .from('semester')
            .insert([{ sem_no, class_id, subject_id, faculty_id }]);
        if (error) {
            throw error;
        }
        res.status(201).json({ data : data , function_name: 'create_semester' });
    } catch (error:any) {
        console.error(error);
        res.status(500).json({ error_message: error.message , function_name: 'create_semester' });
    }
}

export default create_semester