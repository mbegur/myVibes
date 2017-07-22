
export const fetchComment = comment => (
  $.ajax({
    method: 'GET',
    url: `/api/comments`,
    data: comment
  })
);

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments`
  })
);
