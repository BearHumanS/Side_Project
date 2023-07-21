import Layout from '@/components/common/Layout'
import NotFound from '@/components/common/NotPound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/components/common/Home'
import Search from '@/components/Map/Search'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Main />}></Route> */}
          <Route
            path="/"
            element={<Layout />}>
            <Route
              path="/"
              element={<Home />}></Route>
            <Route
              path="/map"
              element={<Search />}></Route>
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
