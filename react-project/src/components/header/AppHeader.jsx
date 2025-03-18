import reactLogo from '../../assets/react.svg';

export default function AppHeader({ 
  reactDescription
}) {
  return (
    <header>
      <img src={reactLogo} alt="React logo" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}