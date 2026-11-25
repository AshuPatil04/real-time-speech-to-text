import { db } from 'hatchable';
export const access = 'public';
export default async function(req,res){ const id=req.params.id;
 if(req.method==='PUT'){const b=req.body||{};if(!String(b.text||'').trim())return res.status(400).json({error:'Transcript text is required'});const {rows}=await db.query('UPDATE transcripts SET text=$1,language=$2,duration_seconds=$3 WHERE id=$4 RETURNING id,text,language,duration_seconds,created_at',[String(b.text).trim(),b.language||'auto',Math.max(0,Number(b.duration_seconds)||0),id]);if(!rows[0])return res.status(404).json({error:'Not found'});return res.json(rows[0]);}
 if(req.method==='DELETE'){const {rowCount}=await db.query('DELETE FROM transcripts WHERE id=$1',[id]);return rowCount?res.json({success:true}):res.status(404).json({error:'Not found'});}
 res.status(405).json({error:'Method not allowed'});
}