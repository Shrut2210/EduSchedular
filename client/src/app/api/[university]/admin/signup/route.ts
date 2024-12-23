import { supabase } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export const POST = async (req: Request, res: Response) => {
    const body = await req.json();
    const { username, email, password, university } = body;
    const hashedPassword = await hash(password, 10);

    try {
        const { data : emailData, error : emailError } = await supabase
        .from('admin')
        .select('id')
        .eq('email', email)
        .single();

        if (emailError)
            throw emailError;

        if (emailData){
            return NextResponse.json(
                {status: 400, errormsg: 'Email already exists', FUNCTIONNAME: 'signup'}
            )
        }

        const { data : uniData, error : uniError } = await supabase
        .from('university')
        .select('id')
        .eq('university_name', university);

        if (uniError)
            throw uniError;

        if (uniData){
            return NextResponse.json(
                {status: 400, errormsg: 'University already exists', FUNCTIONNAME: 'signup'}
            )
        }

        const { error : createUniError} = await supabase.from('university').insert({university_name: university});

        if (createUniError)
            throw createUniError;

        const { data : university_id, error : uni_id_error } = await supabase.from('university').select('id').eq('university_name', university).single();

        if (uni_id_error)
            throw uni_id_error;

        const uni_id = university_id.id;

        const { error } = await supabase
        .from('admin')
        .insert({email, password: hashedPassword, uni_id, username});    
        
        if (error)
            throw error;

        return NextResponse.json(
            {status: 200, DATA : "user signed up successfully", FUNCTIONNAME: 'signup'}
        )

    }
    catch (error : any){
        return NextResponse.json(
            {status: 500, ERRORMSG: error.message, FUNCTIONNAME: 'POST'}
        )
    }
}