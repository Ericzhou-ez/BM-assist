import React from "react";
import { Typography } from "@mui/material";
import ProductCard from "../../components/dashboard/minProductCard";
import "../../styles/RecentProductPage.css";
import Nav from "../../components/core/nav";
import Footer from "../../components/core/footer";

// Light/Dark icons for the top bar (optional)
import ClockLight from "../../assets/icons/description-light.svg";
import ClockDark from "../../assets/icons/description-dark.svg";

export interface RecentProductsPageProps {
   signedIn: boolean;
   user: any;
   handleSignOut: () => Promise<void>;
   isModalOpen: boolean;
   theme: any;
   handleToggleTheme: () => void;
   toggleModal: () => void;
}

const RecentProductsPage: React.FC<RecentProductsPageProps> = ({
   signedIn,
   user,
   handleSignOut,
   isModalOpen,
   theme,
   handleToggleTheme,
   toggleModal,
}) => {
   const isDarkMode = theme === "dark";

   const productList = [
      {
         id: 1,
         title: "财神蛇公仔毛绒玩公仔",
         productId: "13355894839",
         postedTime: "5分钟前",
      },
      {
         id: 2,
         title: "财神蛇公仔毛绒玩具",
         productId: "13355894840",
         postedTime: "5分钟前",
      },
      {
         id: 3,
         title: "财神蛇公仔毛绒玩具",
         productId: "13355894841",
         postedTime: "5分钟前",
      },
      {
         id: 4,
         title: "财神蛇公仔毛绒玩具",
         productId: "13355894841",
         postedTime: "5分钟前",
      },
      {
         id: 5,
         title: "财神蛇公仔毛绒玩具",
         productId: "13355894841",
         postedTime: "5分钟前",
      },
      {
         id: 6,
         title: "财神蛇公仔毛绒玩具",
         productId: "13355894841",
         postedTime: "5分钟前",
      },
      {
         id: 7,
         title: "财神蛇公仔毛绒玩具",
         productId: "13355894841",
         postedTime: "5分钟前",
      },
      {
         id: 8,
         title: "财神蛇公仔毛绒玩具",
         productId: "13355894841",
         postedTime: "5分钟前",
      },
      {
         id: 9,
         title: "财神蛇公仔毛绒玩具",
         productId: "13355894841",
         postedTime: "5分钟前",
      },
   ];

   const clockIcon = isDarkMode ? ClockDark : ClockLight;

   return (
      <div className="recent-products-page">
         <Nav
            home={false}
            signedIn={signedIn}
            user={user}
            handleSignOut={handleSignOut}
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
         />

         <div className="title-recent">
            <img
               src={clockIcon}
               height="30px"
               width="30px"
               alt="o"
               className="top-bar-icon"
            />
            <Typography
               variant="h6"
               component="h1"
               className="title-text-recent"
               sx={{
                  fontSize: {
                     xs: "2rem",
                     sm: "2.2rem",
                     md: "2.4rem",
                     lg: "2.8rem",
                  },
               }}
            >
               最近
            </Typography>
         </div>

         <div className="gradient-divider"></div>

         <div className="cards-grid">
            {productList.map((item) => (
               <ProductCard key={item.id} item={item} isDarkMode={isDarkMode} />
            ))}
         </div>

         <Footer theme={theme} handleToggleTheme={handleToggleTheme} />
      </div>
   );
};

export default RecentProductsPage;
