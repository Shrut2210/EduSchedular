import { supabase } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function POST(req:any, res:any){
    const branch = await req.json()
    const { branch_name, dept_id } = branch

    try {
        const { data, error } = await supabase
            .from('branch')
            .insert([{ branch_name, dept_id }])
            
        if (error) {
            throw error
        }
        
        return NextResponse.json({status: 201, data: data, function_name: 'create_branch'})
        
    } catch (error:any) {
        console.error(error)
        return NextResponse.json({ status : 500, error_message: error.message, function_name: 'create_branch' })
    }
}