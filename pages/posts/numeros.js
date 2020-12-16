import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function Menu({ fixed }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-red-500 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-sm font-bold text-center leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                  href="#pablo"
                >
                  Números
                </a>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a
                      className={
                        "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      Números Naturais
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      Números Inteiros
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      Números Racionais
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <section className="container  text-center p-10 sm:text-xl md:text-xl lg:text-xl">
                <h1 className="font-bold">Números Naturais</h1>
                <p className="text-gray-500">
                  Um conjunto é uma coleção qualquer de objetos formado por
                  elementos.
                </p>
                
              </section>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <section className="container  text-center p-10 sm:text-xl md:text-xl lg:text-xl">
                <h1 className="font-bold">Números Inteiros</h1>
                <p className="text-gray-500">
                  Um conjunto é uma coleção qualquer de objetos formado por
                  elementos.
                </p>
                
              </section>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <section className="container  text-center p-10 sm:text-xl md:text-xl lg:text-xl">
                <h1 className="font-bold">Números Racionais</h1>
                <p className="text-gray-500">
                  Um conjunto é uma coleção qualquer de objetos formado por
                  elementos.
                </p>
                
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
