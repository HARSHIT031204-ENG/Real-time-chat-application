import { useState } from "react";

export default function Hero({ socket }) {
  const [message, setMessage] = useState("");
  const [socketID, setsocketID] = useState("");
  
  
  function handleSubmit(e) {
    e.preventDefault();
    socket.emit("send-message", message); // send to server
    setMessage("");
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
      <section className="w-full max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">
              Dark Hero <span className="text-indigo-400">UI</span>
            </h1>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type here..."
                className="w-full rounded-xl border bg-[#020617] px-4 py-2"
              />

              <button type="submit" className="px-6 py-2 rounded-xl bg-indigo-500">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
