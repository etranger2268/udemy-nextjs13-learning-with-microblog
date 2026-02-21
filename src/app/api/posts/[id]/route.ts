import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';
import type { Post } from '@/types/post';
import { supabase } from '@/util/supabaseClient';

export type GetPostsResponse = Post;

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    notFound();
  }

  return NextResponse.json<GetPostsResponse>(data);
}
