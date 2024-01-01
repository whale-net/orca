// TODO: return to mostly server page and move away components
"use client"

// import Image from 'next/image'
import { run_command } from './util/server_wrapper'

export default function Page() {

  return (
    <main className="flex items-center justify-center h-16">
        {/* todo figure out how to actually center something */}
        <div className=''>
            <p className="text-pretty text-xl">magic</p>
            <button className='outline-double outline-cyan-200 font-extralight' onClick={() => run_command('say hello world')}>click for free wins</button>
        </div>
    </main>
  )
}
