import { ChangeEvent, KeyboardEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./Title";
import Text from "./Text";
import Adult from './Adult';
import Photo from './Photo';
import Counter from './Counter';
import Adder from './Adder';
import WelcomeName from './WelcomeName';
import ConditionalText from './ConditionalText';
import HiddenName from './HiddenName';
import Button from './Button';
import Test from './pages/Test';

const App = () => {
  const welcomeText: string = "Hello World!";
  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === 'h') {
      event?.preventDefault();
      event.stopPropagation();
    }
  };

  const [latestName, setLatestName] = useState<string>("");

  const updateLatestName = (name: string) => {
    setLatestName(name);
  };

  return (
    <section className="App">
      <Title title={welcomeText} subTitle="This is a sub-title" />
      <Text context="QWERTY" type="header" />
      <Text context="1a2a3a4a5a" type="bold" />
      <Adult age={20} />
      <Adult age={17} />
      <input
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          console.log(event.currentTarget.value)} />
      <br />
      <input type="text" onKeyDown={preventKeyDown} />
      <Counter defaultCnt={0} />
      <Adder />
      <WelcomeName />
      <ConditionalText />
      <HiddenName />
      <Photo address="http://file.carisyou.com/upload/2017/12/21/EDITOR_201712210204577590.jpg" description="MASERATI Quattroporte" />
      <Photo address="https://t1.daumcdn.net/news/202105/02/yonhap/20210502061020015fuqw.gif" description="공매도" />

      <Button name="prev" callback={updateLatestName} />
      <Button name="start" callback={updateLatestName} />
      <Button name="next" callback={updateLatestName} />
      <article>{latestName} is clicked!</article>
      <Test />
    </section>
  );
}

export default App;
