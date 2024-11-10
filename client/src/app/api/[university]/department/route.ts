import { supabase } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function POST(req:any, res:any){
    const department = await req.json();
    const id = req.url!.split("api/")[1].split('/')[0]
    const { department_name } = department

    try {
        const { data, error } = await supabase
            .from('department')
            .insert([{ uni_id : id, department_name }]);
        if (error) {
            throw error;
        }
        return NextResponse.json({status: 201 ,data: data, function_name: 'create_department' });
    } catch (error:any) {
        console.error(error);
        return NextResponse.json({status: 500, error_message: error.message, function_name: 'create_department' });
    }
}