const getHighestId = (array) => {
  // On récupére un tableau avec que des ids
  const ids = array.map((item) => item.id);
  // Puis dans ce tableau d'id on cherche le plus haut
  const maxId = ids.length === 0 ? 0 : Math.max(...ids);
  return maxId + 1;
};

export default getHighestId;
