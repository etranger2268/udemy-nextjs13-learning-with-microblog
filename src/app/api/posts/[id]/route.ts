import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';
import { articleFormSchema } from '@/schemas/article';
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

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    console.log(body);
    const validation = articleFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: '入力内容が正しくありません',
          details: validation.error.format(),
        },
        { status: 400 },
      );
    }

    const { title, content } = validation.data;

    const { data, error } = await supabase
      .from('posts')
      .insert({ id, title, content })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (_err) {
    return NextResponse.json({ error: '予期せぬエラーが発生しました' }, { status: 500 });
  }
}
