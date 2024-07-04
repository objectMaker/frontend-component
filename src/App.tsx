import Button from 'components/Button'
import CircleCheckbox from 'components/CircleCheckbox'
import FirstCard from 'components/FirstCard'
import Input from 'components/Input'

function App() {
  return (
    <>
      <div className="p-12">
        <FirstCard />
        <div className="h-5"></div>
        <Button />
        <div className="h-5"></div>
        <Input />
        <div className="h-5"></div>
        <CircleCheckbox />
      </div>
    </>
  )
}

export default App
