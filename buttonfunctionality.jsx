import UIButtons from './components/UIButtons';

function App() {
  const handleSpin = () => alert("Spin!");
  const handleCalendar = () => alert("Open calendar");
  const handleCamera = () => alert("Upload schedule");
  const handleSubmit = () => alert("Submit job or class");
  const handleDifficultyChange = (e) => alert("Difficulty: " + e.target.value);
  const handleAccount = () => alert("Open account dashboard");
  const handleProgress = () => alert("Show progress tracker");

  return (
    <div className="App">
      {/* Slot Machine UI */}
      <UIButtons
        onSpin={handleSpin}
        onCalendar={handleCalendar}
        onCamera={handleCamera}
        onSubmit={handleSubmit}
        onDifficultyChange={handleDifficultyChange}
        onAccount={handleAccount}
        onProgress={handleProgress}
      />
    </div>
  );
}
