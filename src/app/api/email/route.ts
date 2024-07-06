import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_K7HMUc3a_33k1ar4MDjktfzznbKaRGeqm');

export async function GET(){
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['amit.142biswas@gmail.com'],
        subject: 'Hello world',
        text: 'Test email'
    })
    NextResponse.json({
        status: "okay"
    })
}

