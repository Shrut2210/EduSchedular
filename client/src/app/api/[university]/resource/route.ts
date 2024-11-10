const supabase = require('@lib/dbConnect');

const create_resource = async (req:any, res:any) => {
    const resource = req.body;
    const { resource_name, resource_type, capacity, duration } = resource
    const uni_id = req.query.unversity

    try {
        const { data, error } = await supabase
            .from('resource')
            .insert({ resource_name, resource_type, capacity, duration, uni_id });
        
            if (error) {
                console.error(error)
                return res.status(500).json({ error_message: error.message , function_name: 'create_resource'})
            }
            
        res.status(201).json({ data: data , function_name: 'create_resource' });
        
    } catch (error:any) {
        console.error(error);
        res.status(500).json({ error_message: error.message , function_name: 'create_resource' });
    }
}

export default create_resource;
