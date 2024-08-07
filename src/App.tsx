
import './App.css'

function App() {
 

  return (
    <div className='flex justify-center text-center w-screen'>
    <div>
    <div className=" text-[25px] font-bold RobotoMono">
    <h1 >COMING</h1>
    <h1  >SOON</h1>
  </div>

    <div className="text-center p-4 DMSans ">
  <h2 className=" font-bold">Stay Tuned for Thriving Solutions,
  <span className=" font-normal px-1">Where We Transform Challenges into Opportunities!</span>
  </h2>
</div>

<div className='my-10'>
<h2 className=" font-normal font-DMSans">
SUBSCRIBE TO OUR NEWSLETTER, DON’T MISS OUT!
  </h2> 
  <div className="flex justify-center items-center p-2 ">
  <div className=" flex flex-col text-start">
    
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-2 top-2 h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" />
        </svg>
        <input type="email" id="email" placeholder='Email address' className="w-full  text-black rounded-lg border border-slate-200 px-2 py-1 pl-8 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
    </div>
    <button className='rounded-lg font-DMSans border border-slate-200 px-2 py-1 mx-2 text-start bg-white  text-gray-500'>
      Join
    </button>
  </div>
 

</div>

    </div>
   
  
  
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
