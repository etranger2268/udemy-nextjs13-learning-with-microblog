import { z } from 'zod';

export const articleSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  content: z.string().min(1),
  createdAt: z.string(),
});

export const articleFormSchema = articleSchema.omit({
  createdAt: true,
});

export type Article = z.infer<typeof articleSchema>;
export type ArticleForm = z.infer<typeof articleFormSchema>;
