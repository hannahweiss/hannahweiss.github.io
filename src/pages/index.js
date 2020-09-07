import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="hello"/>
      <p>What a world.</p>
    </div>
  );
}
