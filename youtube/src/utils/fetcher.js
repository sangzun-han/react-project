class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    return fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBWIoBHpp-7lbyWn3PihM59OVGIlGFShuY",
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items)
      .catch((error) => console.log("error", error));
  }

  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=b${query}&key=AIzaSyBWIoBHpp-7lbyWn3PihM59OVGIlGFShuY`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .catch((error) => console.log("error", error));
  }
}

export default Youtube;
