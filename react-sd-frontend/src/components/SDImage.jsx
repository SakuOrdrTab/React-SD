const SDImage = ({ images }) => {
    console.log('Rendering SDImage component')
    if (!images || images.length === 0) {
      console.log('No image in images')
      return <div>No image generated yet.</div>
    }
  
    return (
      <div>
        {images.map((imgData, index) => (
          <img
            key={index}
            src={`data:image/png;base64,${imgData}`}
            alt={`Generated ${index}`}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        ))}
      </div>
    )
  }

export default SDImage