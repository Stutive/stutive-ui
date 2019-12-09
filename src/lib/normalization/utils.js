export function normalizeObjectArrayById(objectArray) {
  if (!objectArray) {
    return {
      allIds: [],
      objectsById: {}
    };
  }

  const allIds = [];
  const objectsById = objectArray.reduce((byId, obj) => {
    allIds.push(obj.id);
    return {
      ...byId,
      [obj.id]: obj
    };
  }, {});
  return {
    allIds,
    objectsById
  };
}
