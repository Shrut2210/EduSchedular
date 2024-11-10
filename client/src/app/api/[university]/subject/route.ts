import { supabase } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function POST(req:any, res:any){
    const subject = await req.json()
    const id = req.url!.split("api/")[1].split('/')[0]
    
    const { subject_name } = subject

    try {
        const { data, error } = await supabase
            .from('subject')
            .insert([{ subject_name, uni_id :id}]);
        if (error) {
            throw error;
        }
        return NextResponse.json({status:201, data: data, function_name: 'create_subject' });
    } catch (error:any) {
        console.error(error);
        return NextResponse.json({status:500, error_message: error.message, function_name: 'create_subject' });
    }
}

