import './App.css'
import { createPlaceholderOptions, PlaceholderImage } from 'tiny-placeholder'

const rectangleOptions = createPlaceholderOptions({
  text: 'One',
  backgroundColor: 'lightblue',
  textColor: 'darkblue',
})
const circleOptions = createPlaceholderOptions({
  shape: 'circle',
  text: 'Two',
  backgroundColor: 'lightgreen',
  textColor: 'darkgreen',
  width: 220,
  height: 220,
})
const triangleOptions = createPlaceholderOptions({
  shape: 'triangle',
  text: 'Three',
  backgroundColor: 'lightcoral',
  textColor: 'darkred',
  width: 220,
  height: 220,
})

function App() {
  return (
    <main>
      <PlaceholderImage options={rectangleOptions} alt="Placeholder" />
      <PlaceholderImage options={circleOptions} alt="Placeholder" />
      <PlaceholderImage options={triangleOptions} alt="Placeholder" />
    </main>
  )
}

export default App
