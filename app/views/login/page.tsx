import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const page = () => {
  return (
    <div className="">
      <div className="">
        <div>
          <h1 className="text-white">
            BABER <span className="">SHOP</span>
          </h1>
        </div>
        <div>
          <div>
            <form action="">
              <InputText />

              <Button label="Secondary" severity="secondary" outlined />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

