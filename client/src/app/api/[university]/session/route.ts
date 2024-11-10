const supabase = require('@lib/dbConnect')

const create_session = async (req:any, res:any) => {
    const session = req.body
    const { session_sequence, do_nothing, duration, dept_id } = session

    try {
        const { data, error } = await supabase
            .from('session')
            .insert([{ session_sequence, do_nothing, duration, dept_id }]);
        if (error) {
            throw error;
        }
        res.status(201).json({ data:data, function_name: 'create_session'});
    } catch (error:any) {
        console.error(error);
        res.status(500).json({ error_message: error.message, function_name: 'create_session' });
    }
}

export default create_session