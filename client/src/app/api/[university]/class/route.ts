const supabase = require('@lib/dbConnect');

const create_class = async (req:any, res:any) => {
    const class_data = req.body
    const { class_no, total_batches, student_per_batch, branch_id } = class_data

    try 
    {
        const { data, error } = await supabase
           .from('class')
           .insert([{ class_no, total_batches, student_per_batch, branch_id }]);

        if (error) {
            console.error(error)
            return res.status(500).json({ error_message: error.message, function_name: 'create_class' })
        }
        
        res.status(201).json({data: data, function_name: 'create_class' })
        } 
    catch (error:any) 
    {
        console.error(error);
        res.status(500).json({ error_message: error.message, function_name: 'create_class' });
    }
}

export default create_class;