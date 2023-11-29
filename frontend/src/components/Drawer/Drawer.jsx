import React from "react";
import DrawerItem from "../DrawerItem/DrawerItem";
const Drawer = ({ closeDrawer }) => {
  return (
    <div className="drawer fixed top-0 right-0 h-full w-80 bg-white shadow z-10 py-14 px-6 ">
      <div className="header flex items-center justify-between">
        <div className="title text-[#121212] font-pop text-3xl">Cart</div>
        <button onClick={closeDrawer}>Close Drawer</button>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="cartItems flex-col items-center justify-center mt-4 z-10 overflow-hidden">
          <DrawerItem
            image="src\assets\scaun.png"
            title="Tray Table"
            color="Black"
            price={20.99}
          />
          <DrawerItem
            image="src\assets\scaun.png"
            title="Tray Table"
            color="Black"
            price={20.99}
          />
          <DrawerItem
            image="src\assets\scaun.png"
            title="Tray Table"
            color="Black"
            price={20.99}
          />
          <DrawerItem
            image="src\assets\scaun.png"
            title="Tray Table"
            color="Black"
            price={20.99}
          />

          <DrawerItem
            image="src\assets\scaun.png"
            title="Tray Table"
            color="Black"
            price={20.99}
          />
          <DrawerItem
            image="src\assets\scaun.png"
            title="Tray Table"
            color="Black"
            price={20.99}
          />
        </div>
        <div className="footer z-20 pt-8">
          <div className="total flex items-center justify-between">
            <div className="text text-[#141718] font-pop text-xl font-medium ">
              Total
            </div>
            <div className="total-price text-[#141718] font-pop font-medium text-xl">
              $234.00
            </div>
          </div>
          <div className="checkout-btn-view flex flex-col gap-4 items-center justify-center mt-4">
            <div className="w-full">
              <a
                href=""
                className="bg-[#141718] py-3 px-6 flex items-center justify-center text-white font-int text-xl font-medium rounded-md"
              >
                Checkout
              </a>
            </div>
            <div>
              <a
                href=""
                className="text-[#121212]  font-int text-sm font-semibold border-b border-black"
              >
                View Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
