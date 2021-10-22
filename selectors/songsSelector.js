const songsSelector = (songs, { text }) => {
  return songs.filter((song) => {
    const textMatch = song.songName.toLocaleLowerCase().includes(text)
    return textMatch
  })
}

export default songsSelector
