import Head from "next/head";
import BackgroundCanvas from "../CommonComponents/BackgroundCanvas/BackgroundCanvas";
import Contacts from "../HomeComponents/Contacts/Contacts";
import Navbar from "../HomeComponents/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <BackgroundCanvas></BackgroundCanvas>
      <Navbar></Navbar>
      <Contacts></Contacts>
    </>
  );
}
