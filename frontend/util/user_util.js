
export const fetchSingleUser = id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const updateUser = (id, formData) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    processData: false,
    contentType: false,
    data: formData
  })
);
