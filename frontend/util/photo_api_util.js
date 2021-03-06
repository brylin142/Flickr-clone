export const fetchPhotos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/photos'
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);

export const createPhoto  = photo => (
  $.ajax({
    method: 'POST',
    url: `api/photos`,
    data: { photo }
  })
);

export const updatePhoto = photo => (
  $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: { photo }
  })
);

export const deletePhoto = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  })
);

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: `api/photos/${comment.photo_id}/comments`,
    data: { comment }
  })
);

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
);

export const createTag = tag => (
  $.ajax({
    method: 'POST',
    url: `api/photos/${tag.photo_id}/tags`,
    data: { tag }
  })
);

export const deleteTag = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/tags/${id}`
  })
);