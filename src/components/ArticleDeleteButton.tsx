'use client';

interface ArticleDeleteButtonProps {
  _id: string;
}

const ArticleDeleteButton = ({ _id }: ArticleDeleteButtonProps) => {
  return (
    <form action="">
      <button type="submit">Delete</button>
    </form>
  );
};

export default ArticleDeleteButton;
