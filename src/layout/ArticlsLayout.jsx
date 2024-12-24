import { Outlet } from "react-router-dom"

function ArticlsLayout() {
  return (
    <div>
        <p className='text-4xl'>My articles</p>
        <Outlet/>
    </div>
  )
}

export default ArticlsLayout