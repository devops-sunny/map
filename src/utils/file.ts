export const toBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      resolve(evt.target?.result as string);
    };
    reader.readAsDataURL(file);
  });
};

const validFileExtensions: any = {
  image: ["jpg", "png", "jpeg"],
  pdf: ["pdf"],
};
export const isValidFileType = (fileName: any, fileType: any) => {
  let result;

  if (fileName && fileType === "image") {
    result =
      validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1;
  } else if (fileName && fileType === "pdf") {
    result =
      fileName.split(".").length < 3 &&
      validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1;
  }
  return result;
};
