"use client";
import React, { useState, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import Link from "next/link";

export default function HeadlessDemo() {
  const [visible, setVisible] = useState(true);
  const btnRef1 = useRef(null);

  return (
    <div>
      <div className="card flex justify-content-center">
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          content={({ closeIconRef, hide }) => (
            <div className="min-h-screen flex relative lg:static surface-ground bg-[#121212]! text-white!">
              <div
                id="app-sidebar-2"
                className="surface-section h-screen block shrink-0 absolute lg:static left-0 top-0 z-1 surface-border select-none min-h-screen"
                style={{ width: "280px" }}
              >
                <div className="flex flex-column h-full">
                  <div className="flex align-items-start justify-content-between px-4 pt-3 shrink-0">
                    <div className="flex flex-column gap-1">
                      <span className="font-bold text-xl text-900">
                        BarberManager
                      </span>
                      <span className="text-sm text-500">Admin Painel</span>
                    </div>
                    <span>
                      <Button
                        icon="pi pi-times"
                        rounded
                        outlined
                        severity="danger"
                        aria-label="Cancel"
                        ref={closeIconRef as any}
                        onClick={(e) => hide(e)}
                        className="h-2rem w-2rem"
                      />
                    </span>
                  </div>
                  {/* ------------------------------- */}

                  <div className="overflow-y-auto">
                    <ul className="list-none p-3 m-0">
                      <li>
                        <StyleClass
                          nodeRef={btnRef1}
                          selector="@next"
                          enterFromClassName="hidden"
                          enterActiveClassName="slidedown"
                          leaveToClassName="hidden"
                          leaveActiveClassName="slideup"
                        >
                          <div
                            ref={btnRef1}
                            className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                          >
                            <span className="font-medium">BARBEARIA</span>
                            <i className="pi pi-chevron-down"></i>
                            <Ripple />
                          </div>
                        </StyleClass>
                        <ul className="list-none p-0 m-0 overflow-hidden">
                          <li>
                            <Link
                              href="/views/dashboard"
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <i className="pi pi-home mr-2"></i>
                              <span className="font-medium">Dashboard</span>
                              <Ripple />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/views/agenda"
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <i className="pi pi-calendar-plus mr-2"></i>
                              <span className="font-medium">Agenda</span>
                              <Ripple />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/views/clients"
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <i className="pi pi-users mr-2"></i>
                              <span className="font-medium">Clientes</span>
                              <Ripple />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/views/financial"
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <i className="pi pi-wallet mr-2"></i>
                              <span className="font-medium">Financeiro</span>
                              <span
                                className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                                style={{ minWidth: "1.5rem", height: "1.5rem" }}
                              >
                                3
                              </span>
                              <Ripple />
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                    <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <Avatar
                        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                        shape="circle"
                      />
                      <span className="font-bold">Amy Elsner</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        ></Sidebar>
      </div>
      <div>
        <Button
          icon="pi pi-bars"
          className="p-button-text p-button-plain"
          onClick={() => setVisible(true)}
          aria-label="Menu"
        />
      </div>
    </div>
  );
}
