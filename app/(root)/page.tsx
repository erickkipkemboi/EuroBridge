import Content1 from "../components/Content1";
import Content2 from "../components/Content2";
import MiddlePage from "../components/MiddlePage";
import Gallary from "../components/Gallary";

export default function Home() {
  return (
    <div>
    <MiddlePage/>
      <Content1/>
      <Content2/>
      <Gallary/>
      </div>
  );
}
