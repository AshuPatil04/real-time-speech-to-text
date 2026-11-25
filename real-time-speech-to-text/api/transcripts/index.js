import { db } from 'hatchable';
export const access = 'public';
export default async function(req,res){
 if(req.method==='GET'){ const {rows}=await db.query('SELECT id,text,language,duration_seconds,created_at FROM transcripts ORDER BY created_at DESC'); return res.json(rows); }
 if(req.method==='POST'){ const b=req.body||{}; if(!String(b.text||'').trim()) return res.status(400).json({error:'Transcript text is required'}); const {rows}=await db.query('INSERT INTO transcripts(text,language,duration_seconds) VALUES($1,$2,$3) RETURNING id,text,language,duration_seconds,created_at',[String(b.text).trim(),b.language||'auto',Math.max(0,Number(b.duration_seconds)||0)]); return res.status(201).json(rows[0]); }
 res.status(405).json({error:'Method not allowed'});
}