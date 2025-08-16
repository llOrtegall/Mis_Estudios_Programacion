import { createRoot } from 'react-dom/client'
import { Button } from './components/Button'

const root = createRoot(document.getElementById('root')!)

root.render(
  <>
    <Button text="Button 1" />
    <Button text="Button 2" />
    <Button text="Button 3" />
  </>
)
