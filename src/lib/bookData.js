export const EMPTY_FORM = {
  title: "", author: "", isbn: "", price: "", pageCount: "", publishDate: "",
  language: "", publisher: "", edition: "", coverImageUrl: "", description: "",
};

export function toNumberOrNull(value) {
  if (value === "" || value === null || value === undefined) return null;
  return Number(value);
}

export function toRequest(form) {
  return {
    title: form.title.trim(),
    author: form.author.trim(),
    isbn: form.isbn.trim(),
    price: toNumberOrNull(form.price),
    publishDate: form.publishDate || null,
    bookDetail: {
      description: form.description.trim(),
      language: form.language.trim(),
      pageCount: toNumberOrNull(form.pageCount),
      publisher: form.publisher.trim(),
      coverImageUrl: form.coverImageUrl.trim(),
      edition: form.edition.trim(),
    },
  };
}

export function toFormValues(book) {
  const d = book.bookDetail;
  return {
    title: book.title ?? "",
    author: book.author ?? "",
    isbn: book.isbn ?? "",
    price: book.price ?? "",
    pageCount: d?.pageCount ?? "",
    publishDate: book.publishDate ?? "",
    language: d?.language ?? "",
    publisher: d?.publisher ?? "",
    edition: d?.edition ?? "",
    coverImageUrl: d?.coverImageUrl ?? "",
    description: d?.description ?? "",
  };
}