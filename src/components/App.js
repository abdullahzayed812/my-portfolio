import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { Work } from "../pages/Work";
import { MySkills } from "../pages/MySkills";
import { NotFound } from "../pages/NotFound";
import { Layout } from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="work" element={<Work />} />
        <Route path="skills" element={<MySkills />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
