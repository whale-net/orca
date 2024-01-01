// TODO: think about what should be server side - going to pretty much default to client side for now
"use client"

// import Image from 'next/image'

export default function Page() {

  const testClick = () => {
    fetch('cs2admin/api/command/', {
      method: 'POST',
      // TODO
      // body: '',
    })
  }

  return (
    <main className="flex items-center justify-center h-16">
        {/* todo figure out how to actually center something */}
        <div className=''>
            <p className="text-pretty text-xl">magic</p>
            <button className='outline-double outline-cyan-200 font-extralight' onClick={testClick}>click for free wins</button>
            
        </div>
    </main>
  )
}
