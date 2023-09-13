import Header from "../components/Header";
import Menu from "../components/Menu";
import Dashboard1 from "../components/Dashboard1";
import MiddlePaper from "../components/MiddlePaper";

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Menu />
        <Dashboard1 />
      </div>
    </>
  );
}
