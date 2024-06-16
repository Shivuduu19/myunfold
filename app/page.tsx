import Image from "next/image";
import Header from "./components/main/Header";
import Main from "./components/main/Main";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );
}
