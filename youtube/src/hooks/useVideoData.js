import { fetcher } from "../utils/fetcher";
import { YOUTUBE_DATA_API } from "../constants/index";

export const useVideoData = (url) => {
  return fetcher(`${YOUTUBE_DATA_API}${url}`);
};
