
export const fetchSingleUser = id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const fetchAllSongsByUser = id => (
  $.ajax({
    method: 'GET',
    url: `/api/user/${id}/songs`
  })
);

// export const updateUser = (id, formData) => (
//   $.ajax({
//     method: 'PATCH',
//     url: `/api/users/${id}`,
//     processData: false,
//     contentType: false,
//     data: formData
//   })
// );
