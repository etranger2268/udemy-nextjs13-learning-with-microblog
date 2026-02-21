import { NextResponse } from 'next/server';
import type { Post } from '@/types/post';
import { supabase } from '@/util/supabaseClient';

export type GetPostsResponse = Post[];

export async function GET() {
  const { data: posts, error } = await supabase.from('posts').select('*');
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json<GetPostsResponse>(posts ?? []);
}

export async function POST(request: Request) {
  const { id, title, content, createdAt } = await request.json();

  const { data, error } = await supabase
    .from('posts')
    .insert([{ id, title, content, createdAt }])
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
