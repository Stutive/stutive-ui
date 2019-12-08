export function getObjectByIdFromObjectArray(objectArray) {
  if (!objectArray) {
    return {};
  }

  return objectArray.reduce((byId, obj) => {
    return {
      ...byId,
      [obj.id]: obj
    };
  }, {});
}
