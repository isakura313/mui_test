import Header from "../components/Header";
import Menu from "../components/Menu";
import ExampleComponent from '../components/ExampleComponent'

export default function Example() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Menu />
        <ExampleComponent/>
      </div>
    </div>
  );
}
