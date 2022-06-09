import Head from "next/head";
import BackgroundCanvas from "../CommonComponents/BackgroundCanvas/BackgroundCanvas";
import Contacts from "../HomeComponents/Contacts/Contacts";
import Navbar from "../HomeComponents/Navbar/Navbar";
import Projects from "../HomeComponents/Projects/Projects";

export default function Home() {
  return (
    <>
      <BackgroundCanvas></BackgroundCanvas>
      <Navbar></Navbar>
      <Contacts></Contacts>
      <Projects></Projects>
    </>
  );
}
