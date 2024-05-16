export function convertYoutubeURL(url: string) {
    let videoID = null;
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length === 11) {
        videoID = match[2];
    }
    if (videoID) return `https://www.youtube.com/embed/${videoID}?modestbranding=1&controls=0&showinfo=0&autohide=1&rel=0`;
    return null;
}
