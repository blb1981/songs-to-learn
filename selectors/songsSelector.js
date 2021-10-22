const songsSelector = (songs, { text, showCompleted }) => {
  return songs.filter((song) => {
    const textMatch = song.songName.toLocaleLowerCase().includes(text)

    // If song not complete, or show completed is checked, return true
    const showCompletedMatch = !song.isComplete || showCompleted ? true : false

    return textMatch && showCompletedMatch
  })
}

export default songsSelector
