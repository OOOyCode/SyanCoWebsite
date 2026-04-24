import React, { useState } from "react";
import { api } from "../api/axios";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      await api.post("/contact", form);
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

        * {
          font-family: "Poppins", sans-serif;
        }
      `}</style>

      <section className="relative bg-black flex flex-col md:flex-row justify-center px-4 py-20 gap-20">

        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mb-10 size-140 bg-blue-500/35 rounded-full blur-[200px]"></div>

        {/* LEFT TEXT */}
        <div className="text-center md:text-left mt-12">
          <div className="flex items-center p-1.5 rounded-full border border-blue-900 text-xs w-fit mx-auto md:mx-0">
            <div className="flex items-center">
              <img className="size-7 rounded-full border border-blue-900" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" />
              <img className="size-7 rounded-full border border-blue-900 -translate-x-2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" />
              <img className="size-7 rounded-full border border-blue-900 -translate-x-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50" />
            </div>
            <p className="-translate-x-2 text-xs text-slate-200">
              Donnez nous votre avis
            </p>
          </div>

          <h1 className="font-medium text-3xl md:text-5xl/15 bg-linear-to-r max-md:mx-auto from-white to-blue-300 bg-clip-text text-transparent max-w-[470px] mt-4">
            Voulez vous donnez des suggestions ou nous contacter ?
          </h1>

          <p className="text-sm/6 text-white max-w-[345px] mt-4 mx-auto md:mx-0">
            Un groupe de 1ère SI du lycée Charles de Gaulle à Poissy...
          </p>
        </div>

        {/* FORM */}
        <div className="w-full max-w-lg max-md:mx-auto bg-[#00A63E]/0 backdrop-blur-sm border border-white/10 rounded-xl p-8">

          {success && (
            <p className="text-green-400 mb-4 text-sm">
              Message envoyé ✔
            </p>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>
              <label className="block text-white text-sm mb-2">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                required
                placeholder="Eden Johnson"
                className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-blue-600 transition"
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-2">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="Eden@example.com"
                className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-blue-600 transition"
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                required
                placeholder="Write your message here..."
                className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-blue-600 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-linear-to-r from-blue-950 to-blue-600 hover:from-blue-600 hover:to-blue-950 text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300 cursor-pointer"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;