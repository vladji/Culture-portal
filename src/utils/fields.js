export const  getFields = (name, source, lang) => {
  return source.find(el => el.fieldName === name).fieldData[
    lang
    ];
};
