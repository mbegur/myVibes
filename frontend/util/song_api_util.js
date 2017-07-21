export const fetchAllSongs = () => (
  $.ajax({
    method: 'GET',
    url: '/api/songs'
  })
);

export const fetchSingleSong = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/songs/${id}`
  })
);

export const createSong = formData => (
  $.ajax({
    method: 'POST',
    url: '/api/songs',
    processData: false,
    contentType: false,
    data: formData
  })
);

export const deleteSong = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/songs/${id}`
  })
);

export const updateSong = (id, formData) => (
  $.ajax({
    method: 'patch',
    url: `/api/songs/${id}`,
    processData: false,
    contentType: false,
    data: formData
  })
);
