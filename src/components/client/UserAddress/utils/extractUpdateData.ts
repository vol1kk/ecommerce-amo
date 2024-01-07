type SetDefaultType = {
  id: string;
  isDefault: boolean;
};

export default function extractUpdateData(formData: FormData) {
  const data = Object.fromEntries(formData);

  let id;
  let body;
  if ("setDefault" in data && typeof data.setDefault === "string") {
    const parsedData = JSON.parse(data.setDefault) as SetDefaultType;

    id = parsedData.id;
    body = {
      isDefault: parsedData.isDefault,
    };
  } else {
    const { id: dataId, ...rest } = data;
    id = dataId;
    body = rest;
  }

  return { id, body };
}
