import dynamic from 'next/dynamic'
import { useState } from "react"

export default function TestFunc() {
    
    const WasmComponent = dynamic({
        loader: async () => {
          const wasmModule = await import("../../wasm/testing/pkg/testing_bg.wasm");
          return () => <div>Adding two numbers: {wasmModule.add(2, 4)}</div>
        },
      })

      const [show, changeShow] = useState(false)

    
    
    return (
        <div>
            { show ? <WasmComponent/> : null}
            <button onClick={() => changeShow(!show)}>Click me</button>
        </div>
    );
}