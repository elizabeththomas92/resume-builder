export const isDownload = (isDownloadResume) => {
  return {
    type: "IS_DOWNLOAD",
    payload: isDownloadResume,
  };
};
