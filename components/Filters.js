const Filters = () => {
  return (
    <div
      style={{
        background: 'pink',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>
        Show completed? <input type="checkbox" />
      </div>
      <div>
        <input type="text" />
      </div>
    </div>
  )
}

export default Filters
